import { ImageResponse } from 'next/og'
export const runtime = 'edge'
export const alt = 'WordCounterTool - Free Word Counter and Writing Tools'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export default function Image() {
  return new ImageResponse(
    (
      <div style={{fontSize:40,background:'#0f1117',width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',padding:'60px 80px'}}>
        <div style={{display:'flex',alignItems:'center',gap:'16px',marginBottom:'30px'}}>
          <div style={{width:64,height:64,borderRadius:16,background:'#10b981',display:'flex',alignItems:'center',justifyContent:'center',color:'#ffffff',fontSize:36,fontWeight:900}}>W</div>
          <span style={{color:'#ffffff',fontSize:40,fontWeight:900}}>WordCounterTool</span>
        </div>
        <div style={{color:'#ffffff',fontSize:56,fontWeight:900,lineHeight:1.2}}>Free Word Counter</div>
        <div style={{color:'#10b981',fontSize:56,fontWeight:900,lineHeight:1.2}}>and Writing Tools</div>
        <div style={{color:'#94a3b8',fontSize:22,marginTop:24}}>Word Count | Characters | Reading Time | SEO Tools</div>
        <div style={{color:'#64748b',fontSize:18,marginTop:12}}>15+ Languages | 340+ Pages | www.wordcountertool.net</div>
      </div>
    ),
    { ...size }
  )
}
