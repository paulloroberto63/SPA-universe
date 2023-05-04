export class Router {
     
    routes = {}
    
    route(event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)
        
       this.handle()
    }

   add(routename, page) {
    this.routes[routename] = page
   }
 
 
    handle() {
    const pathname = window.location.pathname
    const route = this.routes[pathname]
   
    fetch(route).then(data => data.text())
    .then(html =>{
        document.querySelector('#app').innerHTML = html
    })
    
    console.log(route)

}
}