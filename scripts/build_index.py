"""Rebuild library/INDEX.md from library/findings/*.md.

Run after adding findings:  python scripts/build_index.py   (from the skill folder, or pass the library path)
"""
import re
import sys
from pathlib import Path

LIB = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parent.parent / 'library'
FIRST = ['reactbits', 'gsap', 'jitter', 'mockups', 'originkit', 'dribbble', 'refero']


def rows():
    files = sorted((LIB / 'findings').glob('*.md'), key=lambda p: (FIRST.index(p.stem) if p.stem in FIRST else 99, p.stem))
    for f in files:
        for block in re.split(r'\n(?=## [A-Z]-\d)', f.read_text(encoding='utf-8'))[1:]:
            fid, _, name = block.split('\n')[0][3:].split(' · ', 2)
            pr = re.search(r'- prints: ([^\s,]+)', block)
            mv = re.search(r'- (?:movimento|motion): (.*)', block)
            motion = re.split(r'(?<=[.;:])\s', mv.group(1).strip())[0][:90] if mv else ''
            cell = lambda s: s.replace('|', '/')
            yield f'| {fid} | {f.stem} | {cell(name)} | {cell(motion)} | {pr.group(1) if pr else ""} |'


header = (
    '# Library index\n\nOne line per finding: ID, source file (`findings/<source>.md`), item, the start of its motion '
    'description, first print (`prints/`). Search this first, then open the finding and its prints.\n\n'
    '| ID | Source | Item | Motion (start) | First print |\n|---|---|---|---|---|\n'
)
lines = list(rows())
(LIB / 'INDEX.md').write_text(header + '\n'.join(lines) + '\n', encoding='utf-8', newline='\n')
print(f'{len(lines)} findings indexed in {LIB / "INDEX.md"}')
