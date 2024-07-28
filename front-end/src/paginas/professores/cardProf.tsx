export function CardProf() {
    return (
        <button className="w-44 h-66 m-3 rounded-xl bg-primeira text-quarta shadow-shape">
            <div
                className="max-w-9 mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-shape rounded-lg text-gray-900">
                
                    <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                        <img className="object-cover object-center h-32" src='/images.jpg' alt='avatar' />
                    </div>
                    <div className="text-center space-y-1">
                        <h2 className="font-semibold">Jefferson Matos</h2>
                        <p className="text-terceira">Muy Thay e Jiu Jitsu</p>
                    </div>
               
            </div>
        </button>
    );
}