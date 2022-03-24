// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px @media (min-width: 1280px) { ... }

export default function Banner(props){
  const {title, subtitle, image} = props;
  return <div className="sm:h-24 md:h-48 lg:h-64 xl:h-96 h-24 bg-slate-600 flex items-center justify-center bg-cover flex-col" 
    style={{'background-image':  `url(${image})`}}>
    <h1>{title ? title : 'Some Title'}</h1>
    <p>{subtitle ? subtitle : ''}</p>
  </div>
}