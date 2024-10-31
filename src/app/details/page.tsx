export default function Details(){
    return(
        <div className=" pt-10 bg-slate-300 h-96">
            <h1 className="text-2xl font-bold text-zinc-800 text-center">Here Is A More Details About This Product</h1>
           <div className="text-orange-500 text-center pt-8">
            <p>Price:Rs.3500</p>
            <p>Fabric: Cotton or Wool</p>

            <button className="m-16 py-3 px-7 bg-blue-600 rounded hover:bg-orange-500 hover:text-blue-600">Order Now</button>
        </div>
        </div>
    )
}