import React from 'react'

function Header({setCountry}) {
    return (
        <div className="head-sectn">
            <div className="title-head"><h1>THE POPULAR TIMES</h1></div>
            <div className="country-head">
                <select>                 
                    <option onClick = {() => {setCountry("in")}}>--Select Country--</option>
                    <option onClick = {() => {setCountry("ae")}}>ae</option>
                    <option onClick = {() => {setCountry("ar")}}>ar</option>
                    <option onClick = {() => {setCountry("at")}}>at</option>
                    <option onClick = {() => {setCountry("au")}}>au</option>
                    <option onClick = {() => {setCountry("be")}}>be</option>
                    <option onClick = {() => {setCountry("bg")}}>bg</option>
                    <option onClick = {() => {setCountry("br")}}>br</option>
                    <option onClick = {() => {setCountry("ca")}}>ca</option>
                    <option onClick = {() => {setCountry("ch")}}>ch</option>
                    <option onClick = {() => {setCountry("cn")}}>cn</option>
                    <option onClick = {() => {setCountry("co")}}>co</option>
                    <option onClick = {() => {setCountry("cu")}}>cu</option>
                    <option onClick = {() => {setCountry("cz")}}>cz</option>
                    <option onClick = {() => {setCountry("de")}}>de</option>
                    <option onClick = {() => {setCountry("eg")}}>eg</option>
                    <option onClick = {() => {setCountry("fr")}}>fr</option>
                    <option onClick = {() => {setCountry("gb")}}>gb</option>
                    <option onClick = {() => {setCountry("gr")}}>gr</option>
                    <option onClick = {() => {setCountry("hk")}}>hk</option>
                    <option onClick = {() => {setCountry("hu")}}>hu</option>
                    <option onClick = {() => {setCountry("id")}}>id</option>
                    <option onClick = {() => {setCountry("ie")}}>ie</option>
                    <option onClick = {() => {setCountry("il")}}>il</option>
                    <option onClick = {() => {setCountry("in")}}>in</option>
                    <option onClick = {() => {setCountry("it")}}>it</option>
                    <option onClick = {() => {setCountry("jp")}}>jp</option>
                    <option onClick = {() => {setCountry("kr")}}>kr</option>
                    <option onClick = {() => {setCountry("lt")}}>lt</option>
                    <option onClick = {() => {setCountry("lv")}}>lv</option>
                    <option onClick = {() => {setCountry("ma")}}>ma</option>
                    <option onClick = {() => {setCountry("mx")}}>mx</option>
                    <option onClick = {() => {setCountry("my")}}>my</option>
                    <option onClick = {() => {setCountry("ng")}}>ng</option>
                    <option onClick = {() => {setCountry("nl")}}>nl</option>
                    <option onClick = {() => {setCountry("no")}}>no</option>
                    <option onClick = {() => {setCountry("nz")}}>nz</option>
                    <option onClick = {() => {setCountry("ph")}}>ph</option>
                    <option onClick = {() => {setCountry("pl")}}>pl</option>
                    <option onClick = {() => {setCountry("pt")}}>pt</option>
                    <option onClick = {() => {setCountry("ro")}}>ro</option>
                    <option onClick = {() => {setCountry("rs")}}>rs</option>
                    <option onClick = {() => {setCountry("ru")}}>ru</option>
                    <option onClick = {() => {setCountry("sa")}}>sa</option>
                    <option onClick = {() => {setCountry("se")}}>se</option>
                    <option onClick = {() => {setCountry("sg")}}>sg</option>
                    <option onClick = {() => {setCountry("si")}}>si</option>
                    <option onClick = {() => {setCountry("sk")}}>sk</option>
                    <option onClick = {() => {setCountry("th")}}>th</option>
                    <option onClick = {() => {setCountry("tr")}}>tr</option>
                    <option onClick = {() => {setCountry("tw")}}>tw</option>
                    <option onClick = {() => {setCountry("ua")}}>ua</option>
                    <option onClick = {() => {setCountry("us")}}>us</option>
                    <option onClick = {() => {setCountry("ve")}}>ve</option>
                    <option onClick = {() => {setCountry("za")}}>za</option>
                </select>
            </div>
        </div>
    )
}

export default Header
