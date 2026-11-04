import Chatdashboard from '@/components/chat'
import Floatingnavbar from '@/components/floatingnavbar'
export default async function Layout({children}:Readonly<{children:React.ReactNode}>){
    return(
        <div className="relative max-w-9xl flex flex-col items-center justify-start no-scrollbar bg-[#0a0a0a]" style={{fontFamily:"'Robotomono',monospace"}}>
           <Floatingnavbar/>
           <div className="w-full pt-14">
               <div className="relative max-w-9xl w-screen flex items-stretch bg-[#0a0a0a] no-scrollbar h-[calc(100vh-3.5rem)]">
            <Chatdashboard/>
            {children}
            </div>
           </div>
        </div>
    )
}
