import "./miOrg.css"

function MiOrg({setShowForm}){
    return <section className="org">
        <h3 className="org__title">
            Mi Organización
        </h3>
        <img onClick={()=>setShowForm((prev)=>!prev)} className="org__add" src="/img/add.png" alt="add"/>
    </section>
}

export default MiOrg;
