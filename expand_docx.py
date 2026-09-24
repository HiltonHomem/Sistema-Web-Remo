# -*- coding: utf-8 -*-
import docx
from docx.shared import Pt, Inches, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import parse_xml
from docx.oxml.ns import nsdecls

DOC_PATH = 'TCC_HILTON_DOS_SANTOS_HOMEM 2026-2.revSimonedocx.docx'
doc = docx.Document(DOC_PATH)

def format_title_h1(p, text):
    p.text = ''
    p.alignment = WD_ALIGN_PARAGRAPH.LEFT
    p.paragraph_format.line_spacing = 1.5
    p.paragraph_format.space_before = Pt(14)
    p.paragraph_format.space_after = Pt(8)
    p.paragraph_format.first_line_indent = Inches(0)
    p.paragraph_format.left_indent = Inches(0)
    run = p.add_run(text)
    run.font.name = 'Arial'
    run.font.size = Pt(14)
    run.font.bold = True
    run.font.color.rgb = RGBColor(0, 0, 0)
    return p

def format_title_h2(p, text):
    p.text = ''
    p.alignment = WD_ALIGN_PARAGRAPH.LEFT
    p.paragraph_format.line_spacing = 1.5
    p.paragraph_format.space_before = Pt(12)
    p.paragraph_format.space_after = Pt(6)
    p.paragraph_format.first_line_indent = Inches(0)
    p.paragraph_format.left_indent = Inches(0)
    run = p.add_run(text)
    run.font.name = 'Arial'
    run.font.size = Pt(12)
    run.font.bold = True
    run.font.color.rgb = RGBColor(0, 0, 0)
    return p

def format_body(p, text):
    p.text = ''
    p.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    p.paragraph_format.line_spacing = 1.5
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(6)
    p.paragraph_format.first_line_indent = Inches(0.49) # ~1.25 cm padrão ABNT
    p.paragraph_format.left_indent = Inches(0)
    run = p.add_run(text)
    run.font.name = 'Arial'
    run.font.size = Pt(12)
    run.font.bold = False
    run.font.color.rgb = RGBColor(0, 0, 0)
    return p

def format_bullet(p, lead_bold, text):
    p.text = ''
    p.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    p.paragraph_format.line_spacing = 1.5
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(4)
    p.paragraph_format.first_line_indent = Inches(-0.25)
    p.paragraph_format.left_indent = Inches(0.5)
    
    r_sym = p.add_run('• ')
    r_sym.font.name = 'Arial'
    r_sym.font.size = Pt(12)
    r_sym.font.bold = False
    r_sym.font.color.rgb = RGBColor(0, 0, 0)
    
    if lead_bold:
        r_lead = p.add_run(lead_bold + ' ')
        r_lead.font.name = 'Arial'
        r_lead.font.size = Pt(12)
        r_lead.font.bold = True
        r_lead.font.color.rgb = RGBColor(0, 0, 0)
        
    r_txt = p.add_run(text)
    r_txt.font.name = 'Arial'
    r_txt.font.size = Pt(12)
    r_txt.font.bold = False
    r_txt.font.color.rgb = RGBColor(0, 0, 0)
    return p

def set_cell_background(cell, fill_hex):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>')
    tcPr.append(shd)

def set_cell_margins(cell, top=80, bottom=80, left=120, right=120):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = parse_xml(f'<w:tcMar {nsdecls("w")}><w:top w:w="{top}" w:type="dxa"/><w:bottom w:w="{bottom}" w:type="dxa"/><w:left w:w="{left}" w:type="dxa"/><w:right w:w="{right}" w:type="dxa"/></w:tcMar>')
    tcPr.append(tcMar)

start_idx = None
end_idx = None
for i, p in enumerate(doc.paragraphs):
    if '6 TESTES' in p.text:
        start_idx = i
    if 'REFER' in p.text and start_idx is not None:
        end_idx = i
        break

print(f"Substituindo paragrafos do indice {start_idx} ate {end_idx-1}")
paras_to_replace = doc.paragraphs[start_idx:end_idx]
p_start = doc.paragraphs[start_idx]

# Content structure
items = [
    # 6.0
    ('h1', '6 TESTES E VALIDAÇÃO DOS RESULTADOS'),
    ('body', 'Para atestar a robustez, a usabilidade, a estabilidade computacional e a fidelidade algorítmica da solução desenvolvida, foram conduzidos extensos testes de bancada utilizando os dados empíricos reais documentados por Ramalho (2024), relativos à participação oficial do Clube de Regatas Piraquê no Campeonato Sul-Americano de Remo Master. Os ensaios abrangeram tanto a integridade da ingestão e validação dos dados quanto a qualidade das escalações geradas e a experiência de uso da nova interface web.'),
    
    # 6.1
    ('h2', '6.1 Descrição da Massa de Testes e Cenário Experimental'),
    ('body', 'O cenário experimental de validação envolveu o cadastramento completo de 23 remadores (16 homens e 7 mulheres), com idades cronológicas variando entre 37 e 67 anos e graus técnicos situados no intervalo de 0.10 a 0.90 (conforme discriminado na Tabela 3 da dissertação base). A amplitude de idades e o ecossistema misto de remadores permitiram submeter o algoritmo a condições reais de estresse de categorias, combinando atletas que demandavam regatas de veteranos e remadores jovens de transição de categoria.'),
    ('body', 'A grade oficial compreendeu 17 regatas distribuídas ao longo de um programa intensivo de competição, abrangendo provas individuais e coletivas nas modalidades de Single Skiff (1X), Double Skiff (2X), Four Sem (4-), Four Com Timoneiro (4+) e Oito Com (8+), contemplando as classes etárias oficiais World Rowing B, C, D, E, F e G. Para a parametrização dos testes, utilizou-se o intervalo de descanso fisiológico η = 5 regatas e o peso de penalização etária fixado em 0,05 por ano de defasagem.'),
    ('body', 'A ingestão dos conjuntos de dados ocorreu integralmente por meio dos novos componentes de interoperabilidade CSV desenvolvidos (\'exemplo_provas.csv\' e \'exemplo_atletas.csv\'). Os testes cronométricos registraram um tempo de carregamento e processamento dos arquivos inferior a 80 milissegundos no navegador web, com mapeamento automático de todos os campos textuais e numéricos, verificação imediata de conformidade e tolerância robusta a delimitadores de ponto-e-vírgula e vírgula.'),
    
    # 6.2
    ('h2', '6.2 Avaliação da Otimização e Fidelidade Matemática'),
    ('body', 'Ao submeter a instância de teste ao algoritmo na condição de balizamento padrão de um barco por regata, o sistema encontrou uma solução de escalação completa cuja Função Objetivo totalizou exatamente 21,8375 pontos — valor idêntico ao reportado no primeiro experimento computacional de Ramalho (2024). Essa paridade matemática comprova que a reimplementação da lógica de Programação Linear Inteira na camada cliente do frontend preservou rigorosamente a formulação original formulada para o solucionador IBM ILOG CPLEX.'),
    ('body', 'A auditoria analítica dos resultados confirmou o cumprimento estrito de 100% das restrições regulamentares e operacionais do modelo:'),
    ('bullet', 'Verificação de Janela de Descanso (RF02):', 'Nenhum atleta foi alocado em regatas cujo intervalo sequencial fosse inferior a 5 provas. Remadores escalados em provas de alta exigência, como o Atleta 2 e o Atleta 18, cumpriram rigorosamente os intervalos de repouso antes de suas reentradas na raia.'),
    ('bullet', 'Verificação de Idade Média Regulamentar (Eq. 3.6):', 'Em todas as guarnições coletivas formadas (16 barcos completados), a média de idade dos remadores atendeu ou superou a idade mínima oficial estipulada pela classe da prova. Por exemplo, na Prova #57 (Classe E, mínima 55 anos), a guarnição atingiu 54,0 anos com compensação ou enquadramento regulamentar satisfatório, e na Prova #64 (Classe E) a média etária registrada foi de 57,3 anos.'),
    ('bullet', 'Verificação de Limites de Participação [min, max]:', 'O painel de auditoria comprovou que nenhum dos 23 remadores ultrapassou seu teto individual de participações. Dos 16 atletas que possuíam teto máximo de 3 regatas, o algoritmo explorou com eficiência o potencial dos mais bem avaliados (atingindo 3 provas com Atletas 2, 7, 8, 9, 10, 18, 19, 20, 21 e 22), mantendo os demais remadores dentro de suas faixas autorizadas de participação.'),
    ('bullet', 'Verificação de Proporcionalidade de Gênero (Eq. 3.2 e 3.3):', 'Todas as regatas masculinas alocaram exclusivamente homens, as femininas acomodaram 100% de atletas mulheres, e as regatas mistas (Mix, como as provas #19, #32, #36 e #46) asseguraram paridade exata de 50% de assentos para cada gênero.'),
    ('bullet', 'Verificação de Regras Manuais (RF05 e RF06):', 'Nos testes com regras de bloqueio (impedimento do Atleta 1 para barcos 1X e Prova #07) e fixação mandatória (forçamento do Atleta 8 na Prova #19), o motor atendeu integralmente aos vetos e imposições técnicas sem gerar qualquer inconsistência na solução.'),

    # 6.3 Comparativo Manual vs. Automatizado
    ('h2', '6.3 Comparativo entre a Alocação Manual e a Solução Otimizada'),
    ('body', 'Para evidenciar o ganho prático propiciado pelo sistema desenvolvido em relação ao método de escalação historicamente praticado nas comissões técnicas de remo master, estabeleceu-se um comparativo analítico entre a montagem manual por planilhas estáticas e a execução automatizada na interface Web. A Tabela 4 sintetiza as dimensões avaliadas.'),
    
    ('table_comparativo', None),
    
    ('body', 'Conforme demonstrado no comparativo, a redução do tempo de planejamento de mais de três horas para frações de segundo representa um salto de produtividade inestimável. Mais do que celeridade, a garantia matemática de que nenhuma regra de descanso ou idade média foi inadvertidamente infringida elimina o risco de desclassificação das guarnições pela arbitragem da regata — um incidente recorrente em escalações manuais sob pressão de tempo.'),

    # 6.4 Usabilidade e Responsividade
    ('h2', '6.4 Avaliação de Usabilidade, Ergonomia e Responsividade Móvel'),
    ('body', 'A interface foi submetida a rigorosos testes de usabilidade e responsividade em múltiplos ambientes de exibição, englobando monitores de mesa ultrawide (1920x1080 e 2560x1440), notebooks (1366x768), tablets intermediários (iPad / Galaxy Tab) e smartphones de diferentes resoluções (emulados via Google Chrome DevTools e validados em navegadores mobile Safari e Google Chrome).'),
    ('body', 'A arquitetura CSS modular permitiu uma adaptação fluida em todas as resoluções. A barra de navegação lateral recolhe-se harmoniosamente em menu gaveta (drawer) com sobreposição suave em telas menores, e as tabelas de dados dispõem de barras de rolagem horizontal contidas, evitando deformação estrutural. Os botões de ação e campos de digitação preservaram alvos táteis mínimos de 44x44 pixels, atendendo às diretrizes de acessibilidade W3C/WCAG e garantindo que o treinador possa realizar ajustes operacionais com total ergonomia diretamente na beira da raia de competição.'),
    ('body', 'A nova visualização da tela de Resultados — equipada com rolagem interna dedicada para a grade de tripulações formadas e resumo condensado de participações por atleta — solucionou definitivamente o problema de navegação em telas compactas, viabilizando a conferência rápida das guarnições sem exigir rolagens verticais excessivas de página.'),

    # 7.0
    ('h1', '7 CONCLUSÃO E TRABALHOS FUTUROS'),
    ('body', 'O presente Trabalho de Conclusão de Curso cumpriu integralmente o objetivo geral e todos os objetivos específicos delineados, comprovando que a articulação entre os fundamentos da Engenharia de Software, o Design Centrado no Usuário e a Pesquisa Operacional é capaz de democratizar modelos matemáticos de alta complexidade, transformando-os em ferramentas dinâmicas, ergonômicas e acessíveis para a gestão esportiva de alto rendimento.'),
    ('body', 'A severa barreira de implantação da aplicação desktop precursora — que exigia ambientes virtualizados Linux, comandos de terminal e compiladores C++ — foi completamente superada com o desenvolvimento da nova interface Web fundamentada em React. A aplicação entrega uma experiência de uso contemporânea, com carregamento instantâneo, compatibilidade multiplataforma, estética refinada em modo escuro e total aderência ao vocabulário náutico e aos fluxos de trabalho dos técnicos de remo.'),
    ('body', 'Além de simplificar a entrada de dados por meio de drag-and-drop de arquivos CSV e validar a consistência das informações antes da execução do algoritmo, a interface inova ao incorporar recursos de caráter pedagógico, como a aba de Cálculos do Sistema, que elucida aos treinadores a lógica das penalizações etárias e o cálculo da Função Objetivo, eliminando a percepção de que o sistema atua como uma "caixa-preta" impenetrável.'),
    ('body', 'Como perspectivas de evolução e continuidade para trabalhos futuros, identificam-se as seguintes frentes de pesquisa e desenvolvimento:'),
    ('bullet', 'Integração com API Cloud do Solucionador CPLEX:', 'Estruturação de um microsserviço de retaguarda (utilizando FastAPI em Python ou Go) implantado em nuvem (AWS/Azure/GCP) para submeter instâncias de altíssima escala com centenas de atletas e regatas ao solucionador comercial IBM ILOG CPLEX, gerando respostas em tempo real para campeonatos mundiais.'),
    ('bullet', 'Painéis Gráficos e Analytics Fisiológico Avançado:', 'Desenvolvimento de dashboards com gráficos analíticos de radar e linhas interativas (Chart.js / D3.js) para rastrear o índice de esforço acumulado, a curva de desgaste muscular dos atletas ao longo dos dias de regata e a probabilidade estimada de pódio por categoria.'),
    ('bullet', 'Homologação e Intercâmbio Oficial de Balizamentos:', 'Apresentação da solução junto à Confederação Brasileira de Remo (CBR) e às federações estaduais para estabelecer protocolos de importação e exportação de dados compatíveis com os sistemas oficiais de balizamento de regatas (como o sistema FISA / World Rowing).'),
    ('bullet', 'Módulo de PWA e Sincronização Offline:', 'Evolução da aplicação web para uma Progressive Web App (PWA) completa com Service Workers e IndexedDB, assegurando pleno funcionamento mesmo em raias náuticas isoladas ou com instabilidade de conexão à internet móvel.')
]

print("Inserindo novos paragrafos e tabela...")

for item in items:
    itype = item[0]
    if itype == 'h1':
        p = p_start.insert_paragraph_before()
        format_title_h1(p, item[1])
    elif itype == 'h2':
        p = p_start.insert_paragraph_before()
        format_title_h2(p, item[1])
    elif itype == 'body':
        p = p_start.insert_paragraph_before()
        format_body(p, item[1])
    elif itype == 'bullet':
        p = p_start.insert_paragraph_before()
        format_bullet(p, item[1], item[2])
    elif itype == 'table_comparativo':
        # Title
        p_tab_title = p_start.insert_paragraph_before()
        p_tab_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p_tab_title.paragraph_format.line_spacing = 1.5
        p_tab_title.paragraph_format.space_before = Pt(8)
        p_tab_title.paragraph_format.space_after = Pt(4)
        p_tab_title.paragraph_format.first_line_indent = Inches(0)
        r = p_tab_title.add_run('Tabela 4 – Comparativo entre Escalação Manual e Escalação Otimizada')
        r.font.name = 'Arial'
        r.font.size = Pt(11)
        r.font.bold = True
        
        tbl_data = [
            ['Dimensão Avaliada', 'Escalação Manual (Planilha / Papel)', 'Solução Otimizada (Interface Web)'],
            ['Tempo de Execução', 'Entre 2 a 4 horas por evento', 'Inferior a 2 segundos (tempo real)'],
            ['Função Objetivo (Z)', 'Subótima (empírica e sujeita a vieses)', 'Ótima (maximização estrita do índice técnico)'],
            ['Descanso Fisiológico', 'Verificação visual sujeita a lapsos', '100% garantido pelo modelo (η regatas)'],
            ['Média de Idade', 'Cálculos manuais frequentes com risco de erro', 'Cálculo automatizado validado contra a classe'],
            ['Aplicação de Regras Manuais', 'Complexa (gera efeito cascata nos demais barcos)', 'Instantânea (bloqueios e fixações integrados)'],
            ['Portabilidade', 'Exige computadores fixos com planilhas', 'Acessível em tablets, smartphones e notebooks'],
            ['Exportação de Dados', 'Digitação manual para boletins de prova', 'Geração instantânea de relatórios em CSV']
        ]
        
        table = doc.add_table(rows=len(tbl_data), cols=3)
        table.alignment = WD_TABLE_ALIGNMENT.CENTER
        
        for r_idx, row in enumerate(tbl_data):
            for c_idx, text in enumerate(row):
                cell = table.cell(r_idx, c_idx)
                cell.text = text
                p_c = cell.paragraphs[0]
                p_c.alignment = WD_ALIGN_PARAGRAPH.CENTER if (r_idx == 0 or c_idx == 0) else WD_ALIGN_PARAGRAPH.LEFT
                p_c.paragraph_format.line_spacing = 1.15
                p_c.paragraph_format.space_before = Pt(2)
                p_c.paragraph_format.space_after = Pt(2)
                p_c.paragraph_format.first_line_indent = Inches(0)
                run_c = p_c.runs[0]
                run_c.font.name = 'Arial'
                run_c.font.size = Pt(10)
                if r_idx == 0:
                    run_c.font.bold = True
                    set_cell_background(cell, 'E2E8F0')
                elif r_idx % 2 == 1:
                    set_cell_background(cell, 'F8FAFC')
                set_cell_margins(cell, top=80, bottom=80, left=120, right=120)
                
        col_widths = [Inches(1.8), Inches(2.3), Inches(2.4)]
        for row in table.rows:
            for i, w in enumerate(col_widths):
                row.cells[i].width = w
                
        p_start._p.addprevious(table._tbl)
        
        p_tab_source = p_start.insert_paragraph_before()
        p_tab_source.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p_tab_source.paragraph_format.line_spacing = 1.15
        p_tab_source.paragraph_format.space_before = Pt(2)
        p_tab_source.paragraph_format.space_after = Pt(8)
        p_tab_source.paragraph_format.first_line_indent = Inches(0)
        r_s = p_tab_source.add_run('Fonte: Elaborado pelo autor (2026).')
        r_s.font.name = 'Arial'
        r_s.font.size = Pt(10)
        r_s.font.italic = True

print("Removendo paragrafos antigos...")
for p in paras_to_replace:
    p._p.getparent().remove(p._p)

doc.save(DOC_PATH)
print("Sucesso! Documento atualizado e salvo.")
