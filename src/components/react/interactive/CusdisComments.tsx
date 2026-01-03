
interface CusdisCommentsProps {
  appId: string;
  host?: string;
  pageId?: string;
  pageUrl?: string;
  pageTitle?: string;
  theme?: 'light' | 'dark' | 'auto';
}

export default function CusdisComments({
  appId,
  host = 'https://cusdis.com',
  pageId,
  pageUrl,
  pageTitle,
  theme = 'auto',
}: CusdisCommentsProps) {
  // const containerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (typeof window === 'undefined') return;

  //   // Load Cusdis script
  //   const scriptId = 'cusdis-script';
  //   let script = document.getElementById(scriptId) as HTMLScriptElement;

  //   if (!script) {
  //     script = document.createElement('script');
  //     script.id = scriptId;
  //     script.src = `${host}/js/cusdis.es.js`;
  //     script.async = true;
  //     script.defer = true;
  //     document.body.appendChild(script);
  //   } else {
  //       // @ts-ignore
  //       if (window.CUSDIS) {
  //           // @ts-ignore
  //           window.CUSDIS.initial();
  //       }
  //   }

  //   // Manual fallback for iframe resizing
  //   const handleResize = (event: MessageEvent) => {
  //     if (event.data && event.data.from === 'cusdis' && event.data.event === 'resize') {
  //       const iframe = containerRef.current?.querySelector('iframe');
  //       if (iframe) {
  //         iframe.style.height = `${event.data.data}px`;
  //       }
  //     }
  //   };

  //   window.addEventListener('message', handleResize);
  //   return () => window.removeEventListener('message', handleResize);
  // }, [appId, host, pageId, pageUrl, pageTitle, theme]);

  // return (
  //   <div className="w-full py-10" ref={containerRef}>
  //     <div
  //       id="cusdis_thread"
  //       data-host={host}
  //       data-app-id={appId}
  //       data-page-id={pageId || (typeof window !== 'undefined' ? window.location.pathname : '')}
  //       data-page-url={pageUrl || (typeof window !== 'undefined' ? window.location.href : '')}
  //       data-page-title={pageTitle || (typeof document !== 'undefined' ? document.title : '')}
  //       data-theme={theme}
  //     />
  //     <style>{`
  //       #cusdis_thread iframe {
  //         width: 100% !important;
  //         border: 0 !important;
  //         overflow: hidden !important;
  //         min-height: 150px;
  //       }
  //     `}</style>
  //   </div>
  // );
//   return(
//     <div style={
//       height:1000px
//     }>
//       <div id="cusdis_thread"
//   data-host="https://cusdis.com"
//   data-app-id="51edece4-6387-457f-bd65-69817fdffa3e"
//   data-page-id="{{ PAGE_ID }}"
//   data-page-url="{{ PAGE_URL }}"
//   data-page-title="{{ PAGE_TITLE }}"
// ></div>
// <script async defer src="https://cusdis.com/js/cusdis.es.js"></script>
//     </div>
//   );
  return (<div/>);
}
