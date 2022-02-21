

export const GistsCard = ({users}) => {

    const handleClick = (e) => {
        e.preventDefault();
    }

    return (
      
        <div className="container">
          {
            users.map( ({id, image, name, username, desc, files, fecha, url}) => {
                return (
    
                    <div className="card_item" key={id}>
                        <div className="card_inner">
                            <img src={image} alt="name"/>
                            <div className="userName">{username}</div>
                            <div className="name">{name?name:"Anonimo"}</div>
                            <div className="detail-box">
                                <p className="description"> Descripción: {desc}</p>
                                <p className="archivo">Archivos: {files}</p>
                                <div className="fecha"><h4>Creada el: {fecha}</h4></div>
                            </div>
                            <button className="seeMore" onClick={handleClick}> Ver mas</button>
                        </div>
    
                    </div>
                )
            })
          }
    
        </div>              
    
    
      )
}

