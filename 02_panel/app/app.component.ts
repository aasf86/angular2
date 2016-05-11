import {Component} from 'angular2/core'
import {Config} from '././config.service'
import {Panel} from './container'

@Component({    
    selector: 'my-app',
    directives: [Panel],
    template: (`
        <br/> 
        <panel title={{tituloPainel}}>
            <h3>Compo do Painel</h3>
            <button>não clique aqui</button>
            <panel title="Step 1">
                Open a terminal
            </panel>
            <panel title="Step 2">
                Say hello world! testando highlighted  
            </panel>            
        </panel>
    `)
})

export class AppComponent 
{ 
    tituloPainel:string = "Título do painel";
}