import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faClock } from '@fortawesome/free-solid-svg-icons'

export default function App() {
    return (
        <>
            <div className="grid p-16 grid-cols-3 grid-rows-2 h-screen w-screen text-white gap-8">
                <div
                    className="row-start-1 row-span-2 col-start-1 card">
                    <div
                        className="border-cyan-300 shadow-xl shadow-cyan-800 circle mb-8">
                        <p className="text-gray-300 mb-2">推荐速度</p>
                        <p className="text-7xl font-bold mb-1">36</p>
                        <p className="text-gray-300">km/h</p>
                    </div>
                    <p className="text-gray-300 mb-2">当前速度</p>
                    <p className="text-3xl font-bold mb-3">20 <span className="text-sm text-gray-300">km/h</span></p>
                    <p className="text-2xl"><FontAwesomeIcon icon={faCaretUp} className="mr-1 text-cyan-300"/> 建议<span
                        className="font-bold">提速</span></p>
                </div>

                <div
                    className="row-start-1 col-start-2 card">
                    <div
                        className="border-red-500 shadow-xl shadow-red-800 circle">
                        <p className="text-gray-300 mb-2">红灯还需要等待 (秒)</p>
                        <p className="text-7xl font-bold mb-1">15</p>
                        <p className="text-gray-300">前方红灯</p>
                    </div>
                </div>

                <div
                    className="row-start-2 col-start-2 card">
                    <div
                        className="border-red-500 shadow-xl shadow-red-800 circle">
                        <p className="text-gray-300 mb-2">距离红绿灯还有</p>
                        <p className="text-7xl font-bold mb-1">400</p>
                        <p className="text-gray-300">米</p>
                    </div>
                </div>

                <div className="row-start-1 col-start-3 card">
                    <div
                        className="border-yellow-300 shadow-xl shadow-yellow-800 circle">
                        <p className="text-gray-300 mb-3">堵塞情况</p>
                        <p className="text-7xl font-bold mb-3">
                            <FontAwesomeIcon icon={faClock} className="text-yellow-300"/>
                        </p>
                        <p className="text-gray-300">轻微堵塞</p>
                    </div>
                </div>

                <div className="row-start-2 col-start-3 card">
                    <div
                        className="border-yellow-300 shadow-xl shadow-yellow-800 circle">
                        <p className="text-gray-300 mb-3">预计通行时间</p>
                        <p className="text-7xl font-bold mb-1">3</p>
                        <p className="text-gray-300">分钟</p>
                    </div>
                </div>
            </div>
        </>
    )
}
