window.MathJax = {
  loader: {
    load: [
      '[tex]/newcommand',
      '[tex]/mathtools',
      '[tex]/cases',
      '[tex]/html'
    ]
  },
  tex: {
    packages: {
      '[+]': [
        'newcommand',
        'mathtools',
        'cases',
        'html'
      ]
    },
    macros: {
      pazocal: ["\\mathcal{#1}", 1],
      Ro: "\\overline{\\mathbb{R}}",
      ux: "\\mathbf{x}",
      dx: "\\,\\text{d}\\ux",
      dt: "\\,\\text{dt}",
      dxi: "\\,\\text{d}\\xi",
      dvecx: "\\,\\text{d}\\vec x",
      dz: "\\,\\text{dz}",
      dy: "\\,\\text{dy}",
      ub: "\\mathbf{u}",
      vb: "\\mathbf{v}",
      pb: "\\mathbf{p}",
      hb: "\\mathbf{h}",
      wb: "\\mathbf{w}",
      qb: "\\mathbf{q}",
      db: "\\mathbf{d}",
      prx: ["\\text{prox}_{\\tau F}(#1)", 1],
      lp: ["||#1||_{L^{#2}(\\Omega)}", 2],
      Dist: "\\pazocal{D}",
      Reg: "\\pazocal{R}",
      colra: ["#1\\colon #2 \\rightarrow #3", 3],
      zpftext: ["\\hspace{0.5cm}\\text{#1}\\hspace{0.5cm}", 1],
      zptftext: ["\\hspace{0.5cm}\\text{#1}\\hspace{0.25cm}", 1],
      onepztext: ["\\hspace{1.0cm}\\text{#1}\\hspace{1.0cm}", 1],
      J: "\\pazocal{J}",
      LL: "\\L",
      tv: "\\TV",
      tgv: "\\TGV",
      g: "\\mathbf{g}",
      dvg: "\\,\\textnormal{div}\\,",
      bv: "\\textnormal{BV}",
      bd: ["\textnormal{BD}(\\Omega, \\textnormal{Sym}^{#1}(\\R^{#2}))", 2],
      prox: "\\text{prox}",
      hwl: "\\H\\times W\\times L",
      Etot: "\E_{\\text{total}}",
      evn: "\\text{even}",
      odd: "\\text{odd}",
	  R:"\\mathbb{R}",
      N:"\\mathbb{N}"
    }
  },
  options: {
    enableMenu: false
  }
};
