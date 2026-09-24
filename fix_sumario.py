# -*- coding: utf-8 -*-
import docx
import re
import lxml.etree

DOC_PATH = 'TCC_HILTON_DOS_SANTOS_HOMEM 2026-2.revSimonedocx.docx'
doc = docx.Document(DOC_PATH)

print("Passo 1: Atualizando estilos de todos os cabeçalhos do documento...")

count_updated = 0
for i, p in enumerate(doc.paragraphs):
    txt = p.text.strip()
    
    # Heading 1: '1 INTRODUÇÃO', '2 DEFINIÇÃO...', '3 JUSTIFICATIVA', '4 METODOLOGIA...', '5 IMPLEMENTAÇÃO...', '6 TESTES...', '7 CONCLUSÃO...'
    if re.match(r'^[1-9]\s+[A-ZÁÉÍÓÚÂÊÔÃÕÇ]', txt):
        if p.style.name != 'Heading 1':
            p.style = 'Heading 1'
            count_updated += 1
            print(f'P{i:03d} -> Heading 1: {txt[:40]}')
            
    # Heading 2: '4.1 ...', '5.1 ...', '6.1 ...' or 'OBJETIVOS'
    elif re.match(r'^[1-9]\.[0-9]+\s+', txt) or txt == 'OBJETIVOS':
        if p.style.name != 'Heading 2':
            p.style = 'Heading 2'
            count_updated += 1
            print(f'P{i:03d} -> Heading 2: {txt[:40]}')
            
    # Heading 3: 'Objetivo Geral', 'Objetivos Específicos'
    elif txt in ['Objetivo Geral', 'Objetivos Específicos', 'Objetivos Especficos']:
        if p.style.name != 'Heading 3':
            p.style = 'Heading 3'
            count_updated += 1
            print(f'P{i:03d} -> Heading 3: {txt[:40]}')

print(f"Total de cabeçalhos atualizados: {count_updated}")

print("Passo 2: Reconstruindo a estrutura visual do Sumário (TOC) no documento...")

ns = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
sdt = doc._element.xpath('//w:sdt')[0]
sdtContent = sdt.find(f'.//{ns}sdtContent')

toc_entries = [
    # (level, num, title, page_str)
    (1, '1', 'INTRODUÇÃO', '13'),
    (1, '2', 'DEFINIÇÃO DO PROBLEMA', '14'),
    (2, '3', 'OBJETIVOS', '15'),
    (3, '3.1', 'OBJETIVO GERAL', '15'),
    (3, '3.2', 'OBJETIVOS ESPECÍFICOS', '15'),
    (1, '3', 'JUSTIFICATIVA', '17'),
    (1, '4', 'METODOLOGIA E ARQUITETURA DA SOLUÇÃO', '18'),
    (2, '4.1', 'Desacoplamento Arquitetural e Transição para o Modelo Cliente-Servidor', '18'),
    (2, '4.2', 'Tecnologias Empregadas no Front-end', '19'),
    (2, '4.3', 'Aplicação das Heurísticas de Usabilidade de Nielsen', '20'),
    (1, '5', 'IMPLEMENTAÇÃO DA INTERFACE E DETALHAMENTO DO CÓDIGO', '21'),
    (2, '5.1', 'Módulo de Parâmetros Globais e Dashboard (RF01 e RF02)', '21'),
    (2, '5.2', 'Módulo de Gestão da Grade de Provas (RF04, RNF02 e RNF06)', '22'),
    (2, '5.3', 'Módulo de Plantel de Remadores (RF03, RNF01 e RNF05)', '22'),
    (2, '5.4', 'Motor de Regras Manuais: Bloqueio e Fixação (RF05 e RF06)', '23'),
    (2, '5.5', 'Validação Pré-Voo e Execução da Otimização Matemática (RF07, RF08 e RNF07/08)', '23'),
    (2, '5.6', 'Central de Ajuda e Manual de Operação Integrado', '24'),
    (1, '6', 'TESTES E VALIDAÇÃO DOS RESULTADOS', '25'),
    (2, '6.1', 'Descrição da Massa de Testes e Cenário Experimental', '25'),
    (2, '6.2', 'Avaliação da Otimização e Fidelidade Matemática', '26'),
    (2, '6.3', 'Comparativo entre a Alocação Manual e a Solução Otimizada', '27'),
    (2, '6.4', 'Avaliação de Usabilidade, Ergonomia e Responsividade Móvel', '28'),
    (1, '7', 'CONCLUSÃO E TRABALHOS FUTUROS', '29'),
]

paras = list(sdtContent.iter(ns + 'p'))
p_header = paras[0]
p_last = paras[-1]

def make_toc_entry_xml(level, num, title, page_str, is_first=False):
    style_val = "Sumrio1" if level == 1 else "Sumrio2"
    tab_left_pos = "440" if level == 1 else "880"
    anchor_id = f"_Toc_auto_{level}_{num.replace('.', '_')}"
    
    field_prefix = """<w:r><w:fldChar w:fldCharType="begin"/></w:r>
  <w:r><w:instrText xml:space="preserve"> TOC \\o "1-3" \\h \\z \\u </w:instrText></w:r>
  <w:r><w:fldChar w:fldCharType="separate"/></w:r>""" if is_first else ""

    xml = f"""<w:p xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:pPr>
    <w:pStyle w:val="{style_val}"/>
    <w:tabs>
      <w:tab w:val="left" w:pos="{tab_left_pos}"/>
      <w:tab w:val="right" w:leader="dot" w:pos="9062"/>
    </w:tabs>
    <w:rPr>
      <w:rFonts w:asciiTheme="minorHAnsi" w:eastAsiaTheme="minorEastAsia" w:hAnsiTheme="minorHAnsi" w:cstheme="minorBidi"/>
      <w:noProof/>
      <w:sz w:val="22"/>
      <w:szCs w:val="22"/>
    </w:rPr>
  </w:pPr>
  {field_prefix}
  <w:hyperlink w:anchor="{anchor_id}" w:history="1">
    <w:r>
      <w:rPr>
        <w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
        <w:rStyle w:val="Hyperlink"/>
        <w:noProof/>
      </w:rPr>
      <w:t>{num}</w:t>
    </w:r>
    <w:r>
      <w:rPr>
        <w:rFonts w:asciiTheme="minorHAnsi" w:eastAsiaTheme="minorEastAsia" w:hAnsiTheme="minorHAnsi" w:cstheme="minorBidi" w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
        <w:noProof/>
        <w:sz w:val="22"/>
        <w:szCs w:val="22"/>
      </w:rPr>
      <w:tab/>
    </w:r>
    <w:r>
      <w:rPr>
        <w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
        <w:rStyle w:val="Hyperlink"/>
        <w:noProof/>
      </w:rPr>
      <w:t>{title}</w:t>
    </w:r>
    <w:r>
      <w:rPr>
        <w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
        <w:noProof/>
        <w:webHidden/>
      </w:rPr>
      <w:tab/>
    </w:r>
    <w:r>
      <w:rPr>
        <w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
        <w:noProof/>
        <w:webHidden/>
      </w:rPr>
      <w:fldChar w:fldCharType="begin"/>
    </w:r>
    <w:r>
      <w:rPr>
        <w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
        <w:noProof/>
        <w:webHidden/>
      </w:rPr>
      <w:instrText xml:space="preserve"> PAGEREF {anchor_id} \\h </w:instrText>
    </w:r>
    <w:r>
      <w:rPr>
        <w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
        <w:noProof/>
        <w:webHidden/>
      </w:rPr>
      <w:fldChar w:fldCharType="separate"/>
    </w:r>
    <w:r>
      <w:rPr>
        <w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
        <w:noProof/>
        <w:webHidden/>
      </w:rPr>
      <w:t>{page_str}</w:t>
    </w:r>
    <w:r>
      <w:rPr>
        <w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
        <w:noProof/>
        <w:webHidden/>
      </w:rPr>
      <w:fldChar w:fldCharType="end"/>
    </w:r>
  </w:hyperlink>
</w:p>"""
    return xml

for p in paras[1:-1]:
    sdtContent.remove(p)

for idx, (lvl, num, title, page_str) in enumerate(toc_entries):
    is_first = (idx == 0)
    entry_xml = make_toc_entry_xml(lvl, num, title, page_str, is_first=is_first)
    new_el = lxml.etree.fromstring(entry_xml)
    p_last.addprevious(new_el)

doc.save(DOC_PATH)
print("Sucesso! Todos os cabeçalhos foram estilizados e o Sumário foi totalmente regenerado.")
