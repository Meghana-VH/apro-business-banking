
import React, { useMemo, useState } from 'react';
import './style.css';

const projects = {
apro: {
brand:'apro', nav:['Products','Resources','Pricing','Blog'], eyebrow:'Business banking, made simple',
headline:'Manage all spend and cash with Apro',
sub:'The powerful business banking platform backed by an award-winning customer support team.',
cta:'Request a demo', secondary:'Apply now',
features:[
['Business Checking Accounts','Manage your operating cash without annoying ACH fees and enjoy 24/7 customer support.','Send money','checking'],
['Business Credit Cards','Stop non-compliant spend in real time and automate your expense accounting.','Control Spend','cards'],
['Apro Treasury','Earn yield on your cash with Apro Treasury.','Earn yield','treasury']
]},
kimaro: {
brand:'KIMARO', nav:['Camera','Features','Technology','Support'], eyebrow:'Professional webcam',
headline:'Capture emotions. Live visuals.',
sub:'Meet the camera built for creators, streamers and teams who want every frame to feel real.',
cta:'Preorder now', secondary:'Explore features',
features:[
['Ultra-lens clarity','A precision-engineered lens delivers rich detail and natural colour in every call.','4K optics','lens'],
['Smoothest focus','Stay sharp with intelligent autofocus that follows the moment.','Smart focus','focus'],
['Built to last','A considered aluminium body, made for your everyday creative setup.','Premium build','build']
]},
dermiqit: {
brand:'DERMIQIT', nav:['About','Shop','Ingredients','Journal'], eyebrow:'Care your skin naturally',
headline:'Care Beyond Boundaries',
sub:'Thoughtful skincare made with naturally inspired ingredients. Simple rituals, visible confidence.',
cta:'Shop now', secondary:'Our philosophy',
features:[
['Pure Skin care','Everyday essentials designed to nourish, balance and protect.','Shop collection','serum'],
['Everyday rituals','Small moments of care that help your skin feel its best.','Build a routine','routine'],
['Naturally considered','Ingredient-led formulas with a gentle approach to daily care.','Our ingredients','natural']
]},
hiresphere: {
brand:'HireSphere', nav:['Platform','Solutions','Resources','Company'], eyebrow:'Improve manager productivity',
headline:'Empowered Managers, Higher Performing Teams',
sub:'Make managers your biggest point of leverage with productive meetings, clear expectations, and accountability.',
cta:'Get started', secondary:'Book a demo',
features:[
['OKRs & Goals','Focus individuals and teams on company priorities, tracking progress and risks each step of the way.','Explore goals','goals'],
['Analytics','Connect performance review results into compensation decisions with clear, useful insights.','View analytics','analytics'],
['Grow','Increase growth and engagement with dynamic employee development tools.','Explore growth','grow']
]},
jobfine: {
brand:'JobFine', nav:['Platform','Solutions','Resources','Company'], eyebrow:'A better way to find your next move',
headline:'Find Your Ideal Job',
sub:'Discover meaningful opportunities, connect with great teams and turn your next career move into a reality.',
cta:'Search jobs', secondary:'Book a demo',
features:[
['8M+ matches made','Find opportunities that match your skills, goals and preferred way of working.','Browse categories','matches'],
['Career opportunities','Explore curated roles from ambitious companies across growing industries.','Explore jobs','jobs'],
['Your next step','Create a profile and let relevant employers discover your potential.','Create profile','profile']
]},
workflow: {
brand:'EQUIPOL', nav:['Home','Workflows','Analytics','Resources'], eyebrow:'Transforming HR processes with innovative solutions',
headline:'HR Manager Workflow',
sub:'Effectively manage your tasks on a leader board by prioritizing responsibilities and delegating when necessary.',
cta:'Get started today', secondary:'Try demo account',
features:[
['Work-hour analysis','Understand team capacity with clear daily and weekly work-hour insights.','View reports','hours'],
['Time tracker','Organize work time effectively with focus and simple task tracking.','Open tracker','tracker'],
['Payroll & tasks','Coordinate payroll, approvals and assigned work from one connected workspace.','Manage tasks','payroll']
]},
upfound: {
brand:'UpFound', nav:['Home','About','Services','Pricing','Solution'], eyebrow:'Fuel for startups',
headline:'Legacy Bank',
sub:'Strategic guidance, funding support and growth acceleration for ambitious early-stage ventures.',
cta:'Get started', secondary:'Contact us',
features:[
['Startup funding','Find the financial support to move your next big idea forward.','Explore funding','funding'],
['Strategic guidance','Make confident decisions with experienced partners by your side.','Meet our team','guidance'],
['Growth acceleration','Build momentum with practical tools, insight and a trusted network.','See solutions','growth']
]}
};

function Icon({type}) {
 const paths = {
 arrow:'M5 12h14M13 6l6 6-6 6', spark:'M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z',
 check:'M5 12l4 4L19 6', play:'M8 5v14l11-7z', circle:'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z'
 };
 return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={paths[type]||paths.spark}/></svg>;
}
function AproVisual(){return <div className="apro-art"><div className="abstract-pill"><span>✿</span></div><div className="abstract-orb">✦</div><div className="balance-card"><small>All Accounts</small><b>$254,783.37</b><hr/><small>Checking</small><strong>$34,764.42</strong><small>Checking</small><strong>$34,764.42</strong></div></div>}
function KimaroVisual(){return <div className="camera-art"><div className="rock rock-a"/><div className="camera-device"><div className="lens"/></div><div className="camera-caption">KIMARO <span>4K / ULTRA HD</span></div><div className="green-dot"/></div>}
function DermiqitVisual(){return <div className="skin-art"><div className="skin-photo"/><div className="skin-bottle"><span>DERMIQIT</span><b>PURE<br/>SERUM</b><small>30 ml / 1 fl oz</small></div><div className="skin-sticker">100%<br/><small>thoughtful care</small></div></div>}
function GoalsVisual(){return <div className="goals-art"><div className="goal-card"><small>GOALS</small><b>◎ Increase international revenue</b><div className="goal-line"/><span>↗ Increase sales by 12%</span><span>↗ Complete team training</span><span>↗ Improve customer experience</span></div><div className="chart-card"><small>RESULTS</small><div className="bars">{[42,68,56,88,73].map((n,i)=><i key={i} style={{height:n+'%'}}/>)}</div><b>Performance insights</b></div></div>}
function JobVisual(){return <div className="job-art"><div className="job-window"><div className="window-top"><i/><i/><i/></div><div className="job-person"><div className="person-head"/><div className="person-body"/></div><div className="floating-tag">🔔 Job alert subscription</div><div className="search-mini"><span>Search talent</span><b>→</b></div></div><div className="job-stat"><b>8M+</b><span>Matches made</span></div></div>}
function WorkflowVisual(){return <div className="workflow-art"><div className="workflow-title">HR Manager <span>Workflow</span></div><div className="float-panel panel-time"><small>WORK HOUR ANALYSIS</small><b>45h 45m</b><div className="line-chart">⌁⌁⌁⌁⌁</div></div><div className="float-panel panel-day"><small>DAY OFF</small><b>20 <small>days</small></b><div className="ring">✓</div></div><div className="workflow-bottom"><span>TEAM PAYROLL</span><b>$13,670.00</b><div className="progress"><i/></div></div></div>}
function UpfoundVisual(){return <div className="upfound-art"><div className="gem"><div/></div><div className="coin coin-a"/><div className="coin coin-b"/><div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="fund-card"><small>STARTUP MOMENTUM</small><b>86%</b><span>Growth readiness</span></div></div>}
function Visual({theme}){return ({apro:<AproVisual/>,kimaro:<KimaroVisual/>,dermiqit:<DermiqitVisual/>,hiresphere:<GoalsVisual/>,jobfine:<JobVisual/>,workflow:<WorkflowVisual/>,upfound:<UpfoundVisual/>})[theme]}
function MiniVisual({theme,type}){return <div className={'mini-visual mini-'+type}><Visual theme={theme}/></div>}
function App(){
 const data=projects[document.documentElement.dataset.theme]||projects.apro;
 const [menu,setMenu]=useState(false),[email,setEmail]=useState(''),[search,setSearch]=useState(''),[notice,setNotice]=useState('');
 const [active,setActive]=useState('All');
 const cards = useMemo(()=>data.features.filter((f,i)=>active==='All'||(active==='Featured'&&i===0)||f[0].toLowerCase().includes(active.toLowerCase())),[active,data]);
 const submit=(e)=>{e.preventDefault();setNotice(email?'Thanks — we’ll be in touch soon.':'Please enter your email address.');};
 return <div className={'site theme-'+document.documentElement.dataset.theme}>
  <header className="nav-wrap"><a className="brand" href="#top"><span className="brand-mark">●</span>{data.brand}</a><nav className={menu?'nav-links open':'nav-links'}>{data.nav.map(n=><a key={n} href="#features">{n}</a>)}</nav><div className="nav-actions"><a className="login" href="#contact">Log in</a><a className="outline-btn" href="#contact">{data.secondary}</a><a className="dark-btn" href="#contact">{data.cta}</a></div><button className="menu-btn" onClick={()=>setMenu(!menu)} aria-label="Toggle menu">☰</button></header>
  <main id="top"><section className="hero"><div className="hero-copy"><span className="eyebrow">{data.eyebrow}</span><h1>{data.headline}</h1><p>{data.sub}</p><div className="hero-actions"><a className="primary-btn" href="#contact">{data.cta}<Icon type="arrow"/></a><a className="text-btn" href="#features">{data.secondary}<Icon type="arrow"/></a></div></div><div className="hero-visual"><Visual theme={document.documentElement.dataset.theme}/></div></section>
  <section className="trust-row"><span>BUILT FOR WHAT'S NEXT</span><b>northstar</b><b>◈ vertex</b><b>◉ form & field</b><b>✳ horizon</b><b>◎ orbit</b></section>
  <section className="features-section" id="features"><div className="section-heading"><div><span className="eyebrow">A smarter way forward</span><h2>Everything you need.<br/><em>Nothing you don't.</em></h2></div><p>Thoughtfully designed tools and experiences to help you move with clarity and confidence.</p></div><div className="filter-row"><div className="filters"><button className={active==='All'?'selected':''} onClick={()=>setActive('All')}>All features</button><button className={active==='Featured'?'selected':''} onClick={()=>setActive('Featured')}>Featured</button></div><span>Explore the platform <Icon type="arrow"/></span></div><div className="feature-grid">{cards.map((f,i)=><article className={'feature-card card-'+i} key={f[0]}><div className="feature-visual"><div className="feature-icon"><Icon type="spark"/></div><div className="feature-mock"><div className="mock-top"/><div className="mock-content"><i/><i/><i/></div><div className="mock-chart"><b/><b/><b/><b/><b/></div></div></div><div className="feature-copy"><span className="tag">{f[2]}</span><h3>{f[0]}</h3><p>{f[1]}</p><a href="#contact">Discover more <Icon type="arrow"/></a></div></article>)}</div></section>
  <section className="cta-section" id="contact"><div><span className="eyebrow">Make your next move</span><h2>Ready to make things happen?</h2><p>Get a closer look at what a better experience can make possible.</p></div><form onSubmit={submit}><label htmlFor="email">Work email</label><div className="email-row"><input id="email" type="email" placeholder="you@company.com" value={email} onChange={e=>setEmail(e.target.value)}/><button type="submit">Get in touch <Icon type="arrow"/></button></div>{notice&&<small className="notice">{notice}</small>}</form></section></main>
  <footer><a className="brand" href="#top"><span className="brand-mark">●</span>{data.brand}</a><span>© 2026 {data.brand}. Designed for what’s next.</span><div><a href="#features">Features</a><a href="#contact">Contact</a><a href="#top">Back to top ↑</a></div></footer>
 </div>
}
export default App;
