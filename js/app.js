const eventBrite = new EventBrite()
const ui = new Interface()

document.getElementById('buscarBtn').addEventListener('click', (e) => {
    e.preventDefault()
    const search = document.getElementById('evento').value
    const categories = document.getElementById('listado-categorias')

    const catSelected = categories.options[categories.selectedIndex].value 

    console.log(search)
    console.log(catSelected)

    if(search !== '') {
        eventBrite.getEvents(search, catSelected)
            .then( events => {
                console.log(events)
            })
            .catch( err =>{ 
                console.log(`An error has been ocurred: ${err}`)
            })
    } else {
        ui.getMessage('Escribe algo en el buscador', 'alert alert-danger nt-4')
    }
})