"use strict";(self.webpackChunkjazevedo_me=self.webpackChunkjazevedo_me||[]).push([[821],{1762:function(e,t,n){n.r(t),n.d(t,{Head:function(){return v},default:function(){return w}});var a=n(1151),i=n(7294);function r(e){const t=Object.assign({div:"div",p:"p",h2:"h2",strong:"strong",em:"em",a:"a",ul:"ul",li:"li"},(0,a.ah)(),e.components),{Figure:n,Iframe:r}=t;return n||o("Figure",!0),r||o("Iframe",!0),i.createElement(i.Fragment,null,i.createElement(n,{maxWidth:800},i.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/05acb21d112cb9ad0b77e811b25c67e6/7da98/banner.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 68.88888888888889%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACHklEQVR42p2TS08TURSA+xv8D678Aa515wI18UGImGhMFIIVVAoqEE2Vh4AQRFooUNryUGJNMBExmrB27Za4MGgAqZXex0w7M/QzdypCgYWw+OZOztz75Zwz5wY60xa3xxWNceWvNyKC60PCX0vvOWoigpqooG5YEEpImpOSxrgkOFKKlb5LaqKKwNJ3hy9fCywtF/i2UmA1o8lkJetZzcq6IpMV/PgpWV7TrGUka78UqxmL7IZCK+ljaUVx08VxPQLXBiXV/ZIL3YLHs5qOtMXDGU3bjMZkfy+lqeqVVD1TXH2uCL/StExpkos24OE4Hq7n4Xke+YJL4FKf5MqA4mRbjvspTd9bmztxReu0JvbR5mZMcf6ppLJHUtEuaE5qmpKaoXnLFxYcF9d1t4W3RhVnOgSVPYKOtPalnWlN27QmlNA0JRQXuyWn2wUNY4oX8xYPJjVzn/OlDN1dwvbX2s9i/JNN1xuLYEzx6KXmVFhwojVH/ZiidlhxPJTz40ZiKG56/0RlQnOg4olg+INNeNbibKegbkRxLLjB0doN7k5oznVJjlT/pjaq/vbNLZOVCVOLNpEFi8F3ll9O75xFdKFUlim3wR8lyeV+SeS9BcVyyR6h2bBVxv+wdXgnZUI77/qNNX/L2UFhH0x8d1Z7hOaxc9NhKROagHMI9hV6nnugHu6huI2RBszVMgNrBvwg1I8qWiYlrVO6hLkIE4o/tyLbNb+MTzwAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="initial screen"\n        title="initial screen"\n        src="/static/05acb21d112cb9ad0b77e811b25c67e6/7da98/banner.png"\n        srcset="/static/05acb21d112cb9ad0b77e811b25c67e6/d25a6/banner.png 315w,\n/static/05acb21d112cb9ad0b77e811b25c67e6/0956b/banner.png 630w,\n/static/05acb21d112cb9ad0b77e811b25c67e6/7da98/banner.png 800w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),i.createElement("figcaption",null,i.createElement(t.p,null,"Initial screen upon starting the application."))),"\n",i.createElement(t.h2,{id:"-underlying-architecture"},"🏛 Underlying Architecture"),"\n",i.createElement(t.p,null,"As part of the design guidelines, Library Manager is a Client database programmed designed to be connected to a centralized database server. Instead of locally serving the database, the demo provided under Releases uses a sample dataset in order to showcase functionality."),"\n",i.createElement(t.p,null,"Internally, Library Manager takes advantage of Microsoft’s flagship .NET UI framework, Windows Presentation Foundation, or WPF. WPF works through two components: the design is programmed in ",i.createElement(t.strong,null,"XAML"),", or Extensible Application Markup Language (",i.createElement(t.em,null,"different from XML"),"), while the behavior is programmed in ",i.createElement(t.strong,null,"C#"),". This separation of ",i.createElement(t.em,null,"design")," and ",i.createElement(t.em,null,"behavior")," is key to the framework’s architecture, as it allows for the adoption of the Model-View-ViewModel design paradigm as outlined below."),"\n",i.createElement(n,{maxWidth:500},i.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 660px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/7cf54513293935cdd1e0b55e2f01d67e/07911/architecture.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 88.25396825396825%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsTAAALEwEAmpwYAAADNklEQVR42oWUWXPiVhBG+f+/Iy/ZquyAl4ntYBuzCMwOHkALYrNYJIQkJAEiOal7GabGSSrzcOiu7svH162LUofDgd1uRxjFbMNIEkbR1/z/OJ+L4xihs9/vSR2PCa4XkO9OKGs2r7qDMligDJbfYYGiLimpKxqaRRxHUjSVJAds1+Pyqc4PmWd+y7Vovce0ZvEpfmD3NW9be5rTiPokpGbYbLchSZKQCnyfolLhOt/mx09FKXyr9LjKd8i8tMnk21wX30i/tLgqdLkpvnFT+szPdwrZhkljGlHTV2zDbwRn8yXpXJNf7itcPNb59eGVn35XSL+0KetrSqr9Lwr9pezVhEMheHa4DQKsxZJyb0Z5MJcovXeUvkVFXdAw19T/g4bpUh86VA2Hhj4nDCPE+lJBELBcLrEsi/l8LlksFjJa1pzJZPJdptMpUfTloQhB27apVqvU63WJoig0m02Z67rOaDTCNE0Z/4moa5omr54c2fd9er0ehUKBzNUVmUyG6+trLi4uuLm5od/vYxiGFBZfFFFVVQaDgeyNx2NZF1E6FFY7nQ7Pz8/c39+TzWZ5zGa5u7uTuahdXl5K8XQ6ze3tLfl8XpLLPUtxQ9cplUoIc6nj8Shverlcli7FuCfKlEoKtVqNYrFIpVKRUSBczmYzuT/hTCB2LgXF3J7nMZ1OmFsW1vv7l8Pj09LHY9k7LX/CdDKRexsODYbDoVzH+cEIndQhSQi3AUb/lanRZKzVmY87BI5BYBv49imec9/WTz1nKNk6Q7yVKX9MOjwcEuIooFq8pfh4Sf6PC8x+iWMwIlqr7DYG0VojXmsy328MYldnt9GJXVFXiTYjZrNvHEZhwFvjidbrA4P2C63KPa3KA/1WDrNf5nPjiW4tS6+VY6xW5FmtW2DYK6F2XuREhUKeMAzPI/to3Tx6N4/xVmDQzvFuVPkrmpAEJsfAlDEJhuw9g609YOuohI5G5Oo4Vh/xF5b3UHwEgYdjDYg3IyLXJN6YRK7YjyFxFxrucoi7muA6Fv5mhb+x8TYO3maN77nyXSjv4TnZ7fZyqZ63+YCoid5+f2C3P7A/JCTHP0mS4wfOL9i/Ad2IGxb3aZeDAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Architecture"\n        title="Architecture"\n        src="/static/7cf54513293935cdd1e0b55e2f01d67e/07911/architecture.png"\n        srcset="/static/7cf54513293935cdd1e0b55e2f01d67e/d25a6/architecture.png 315w,\n/static/7cf54513293935cdd1e0b55e2f01d67e/0956b/architecture.png 630w,\n/static/7cf54513293935cdd1e0b55e2f01d67e/07911/architecture.png 660w"\n        sizes="(max-width: 660px) 100vw, 660px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),i.createElement("figcaption",null,i.createElement(t.p,null,"WPF MVVM Architecture overview"))),"\n",i.createElement(t.h2,{id:"-documentation"},"📚 Documentation"),"\n",i.createElement(t.p,null,"Extensible documentation was developed via LaTeX in order to explain each feature of the program, and is available as a ",i.createElement(t.a,{href:"/projects/library-manager/product-guide.pdf"},"PDF document"),"."),"\n",i.createElement(t.h2,{id:"-design-process"},"📐 Design Process"),"\n",i.createElement(t.p,null,"A brief slideshow discussing the development of the project has been created, and is available below."),"\n",i.createElement(r,{src:"https://docs.google.com/presentation/d/e/2PACX-1vTGNy98lkIgXEggQ311Q4-lEVoktZXNi6ZJbzeMykYx1stRzgmh1ap6npJRz_zBeCNXJ6MNUN8nVQ-w/embed?start=false&loop=false&delayms=3000",width:"960",height:"569",allowFullScreen:!0,style:{borderTopLeftRadius:0,borderTopRightRadius:0}}),"\n",i.createElement(t.h2,{id:"-open-source-external-packages"},"🔗 Open Source External Packages"),"\n",i.createElement(t.ul,null,"\n",i.createElement(t.li,null,i.createElement(t.a,{href:"https://github.com/ControlzEx/ControlzEx"},"ControlsEx v3.0.2.4")," by Jan Karger, Bastian Schmidt, and James Willock: provides useful UI controls and styling with which to build the application frontend"),"\n",i.createElement(t.li,null,i.createElement(t.a,{href:"https://github.com/itext/itextsharp"},"iTextSharp v5.5.13")," by Bruno Lowagie, Paulo Soares, et al: Open-source framework for PDF creation in C#; used for generating reports"),"\n",i.createElement(t.li,null,i.createElement(t.a,{href:"https://mahapps.com/"},"MahApps.Metro v1.5.0")," by Jan Karger, Dennis Daume, Brenden Forster, Paul Jenkins, Jake Ginnivan, and Alex Mitchel: provides UI styling for a majority of the elements in the application front-end in order to conform to Microsoft’s Metro design paradigm within WPF applications"),"\n"))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?i.createElement(t,e,i.createElement(r,e)):r(e)};function o(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var s=n(4316),c=n(5314),d=n(5489),p=n(5645),m=n(7613),g=n(9446),u=n(7653),h=n(3895),b=n(674),A=n(4345),f=n(917);const y={PageLayout:(0,s.Z)("div",{target:"e1pmjel03"})(h.nC," padding-top:",g.S.micro,";padding-bottom:",g.S.kilo,";"),ProjectOverview:(0,s.Z)(p.Z,{target:"e1pmjel02"})("max-width:650px;position:relative;padding-top:",g.S.micro,";padding-bottom:calc(",g.S.milli," + 4px);"),ProjectContent:(0,s.Z)(u.ZP,{target:"e1pmjel01"})("&>:last-child{margin-bottom:",g.S.milli,";}"),ProjectEndRule:(0,s.Z)("hr",{target:"e1pmjel00"})("max-width:100px;margin:",g.S.nano," 0;border-top:2px solid ",(0,b.$_)("text"),";margin:0;")};function E(e){let{data:t,pageContext:n,children:a}=e;const{isAuxillary:i}=n,{title:r,buttons:l,type:o,start:s,end:p,lead:g,topics:u}=t.mdx.frontmatter;if(i)return(0,f.tZ)(c.Z,null,(0,f.tZ)(y.PageLayout,null,(0,f.tZ)(y.ProjectContent,null,(0,f.tZ)(d.ZP,{linkableHeadings:!0},a)),(0,f.tZ)(y.ProjectEndRule,null)));var h,b;if(null===o||null===s||null===g)throw new Error('Missing required frontmatter fields for project page "'+r+'": type, start, lead');return(0,f.tZ)(c.Z,{overlayChildren:(0,f.tZ)(m.Z,null)},(0,f.tZ)(y.PageLayout,null,(0,f.tZ)(y.ProjectOverview,{type:o,title:r,start:s,end:p,lead:g,mainTopics:null!==(h=null==u?void 0:u.main)&&void 0!==h?h:[],secondaryTopics:null!==(b=null==u?void 0:u.secondary)&&void 0!==b?b:[],buttons:null!=l?l:[]}),(0,f.tZ)(y.ProjectContent,null,(0,f.tZ)(d.ZP,{linkableHeadings:!0},a)),(0,f.tZ)(y.ProjectEndRule,null)))}function w(e){return i.createElement(E,e,i.createElement(l,e))}function v(e){let{data:t}=e;const{title:n,description:a}=t.mdx.frontmatter;return(0,f.tZ)(A.Z,{title:n,description:a})}}}]);
//# sourceMappingURL=component---src-templates-project-tsx-content-file-path-home-runner-work-jazevedo-me-jazevedo-me-content-projects-library-manager-index-mdx-b014a05061721ad09c4f.js.map