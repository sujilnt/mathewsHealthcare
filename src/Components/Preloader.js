import React from 'react'

const Preloader = () => {
    const websiteCharacters = "mathew Health Care".split('');
  return (
    <>
        <div id="preloader" className="preloader">
        <div className="animation-preloader">
            <div className="spinner">                
            </div>
                <div className="txt-loading">
                    {websiteCharacters.map((character)=>(
                        <span data-text-preloader={character.toUpperCase()} className="letters-loading">
                         {character.toUpperCase()}
                        </span>
                    ))}
                </div>
            <p className="text-center">Loading</p>
        </div>
        <div className="loader">
            <div className="row">
                <div className="col-3 loader-section section-left">
                    <div className="bg"></div>
                </div>
                <div className="col-3 loader-section section-left">
                    <div className="bg"></div>
                </div>
                <div className="col-3 loader-section section-right">
                    <div className="bg"></div>
                </div>
                <div className="col-3 loader-section section-right">
                    <div className="bg"></div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Preloader