import React from 'react'

function Header({setCountry,setSearch}) {
    return (
        <div className="head-sectn">
            <div className="title-head"><h1>THE POPULAR TIMES</h1></div>
            <div className="country-head">
                <select>                 
                    <option onClick = {() => {setCountry("in");setSearch("")}}>--Select Country--</option>
                    <option onClick = {() => {setCountry("ae");setSearch("")}}>ae</option>
                    <option onClick = {() => {setCountry("ar");setSearch("")}}>ar</option>
                    <option onClick = {() => {setCountry("at");setSearch("")}}>at</option>
                    <option onClick = {() => {setCountry("au");setSearch("")}}>au</option>
                    <option onClick = {() => {setCountry("be");setSearch("")}}>be</option>
                    <option onClick = {() => {setCountry("bg");setSearch("")}}>bg</option>
                    <option onClick = {() => {setCountry("br");setSearch("")}}>br</option>
                    <option onClick = {() => {setCountry("ca");setSearch("")}}>ca</option>
                    <option onClick = {() => {setCountry("ch");setSearch("")}}>ch</option>
                    <option onClick = {() => {setCountry("cn");setSearch("")}}>cn</option>
                    <option onClick = {() => {setCountry("co");setSearch("")}}>co</option>
                    <option onClick = {() => {setCountry("cu");setSearch("")}}>cu</option>
                    <option onClick = {() => {setCountry("cz");setSearch("")}}>cz</option>
                    <option onClick = {() => {setCountry("de");setSearch("")}}>de</option>
                    <option onClick = {() => {setCountry("eg");setSearch("")}}>eg</option>
                    <option onClick = {() => {setCountry("fr");setSearch("")}}>fr</option>
                    <option onClick = {() => {setCountry("gb");setSearch("")}}>gb</option>
                    <option onClick = {() => {setCountry("gr");setSearch("")}}>gr</option>
                    <option onClick = {() => {setCountry("hk");setSearch("")}}>hk</option>
                    <option onClick = {() => {setCountry("hu");setSearch("")}}>hu</option>
                    <option onClick = {() => {setCountry("id");setSearch("")}}>id</option>
                    <option onClick = {() => {setCountry("ie");setSearch("")}}>ie</option>
                    <option onClick = {() => {setCountry("il");setSearch("")}}>il</option>
                    <option onClick = {() => {setCountry("in");setSearch("")}}>in</option>
                    <option onClick = {() => {setCountry("it");setSearch("")}}>it</option>
                    <option onClick = {() => {setCountry("jp");setSearch("")}}>jp</option>
                    <option onClick = {() => {setCountry("kr");setSearch("")}}>kr</option>
                    <option onClick = {() => {setCountry("lt");setSearch("")}}>lt</option>
                    <option onClick = {() => {setCountry("lv");setSearch("")}}>lv</option>
                    <option onClick = {() => {setCountry("ma");setSearch("")}}>ma</option>
                    <option onClick = {() => {setCountry("mx");setSearch("")}}>mx</option>
                    <option onClick = {() => {setCountry("my");setSearch("")}}>my</option>
                    <option onClick = {() => {setCountry("ng");setSearch("")}}>ng</option>
                    <option onClick = {() => {setCountry("nl");setSearch("")}}>nl</option>
                    <option onClick = {() => {setCountry("no");setSearch("")}}>no</option>
                    <option onClick = {() => {setCountry("nz");setSearch("")}}>nz</option>
                    <option onClick = {() => {setCountry("ph");setSearch("")}}>ph</option>
                    <option onClick = {() => {setCountry("pl");setSearch("")}}>pl</option>
                    <option onClick = {() => {setCountry("pt");setSearch("")}}>pt</option>
                    <option onClick = {() => {setCountry("ro");setSearch("")}}>ro</option>
                    <option onClick = {() => {setCountry("rs");setSearch("")}}>rs</option>
                    <option onClick = {() => {setCountry("ru");setSearch("")}}>ru</option>
                    <option onClick = {() => {setCountry("sa");setSearch("")}}>sa</option>
                    <option onClick = {() => {setCountry("se");setSearch("")}}>se</option>
                    <option onClick = {() => {setCountry("sg");setSearch("")}}>sg</option>
                    <option onClick = {() => {setCountry("si");setSearch("")}}>si</option>
                    <option onClick = {() => {setCountry("sk");setSearch("")}}>sk</option>
                    <option onClick = {() => {setCountry("th");setSearch("")}}>th</option>
                    <option onClick = {() => {setCountry("tr");setSearch("")}}>tr</option>
                    <option onClick = {() => {setCountry("tw");setSearch("")}}>tw</option>
                    <option onClick = {() => {setCountry("ua");setSearch("")}}>ua</option>
                    <option onClick = {() => {setCountry("us");setSearch("")}}>us</option>
                    <option onClick = {() => {setCountry("ve");setSearch("")}}>ve</option>
                    <option onClick = {() => {setCountry("za");setSearch("")}}>za</option>
                </select>
            </div>
        </div>
    )
}

export default Header
