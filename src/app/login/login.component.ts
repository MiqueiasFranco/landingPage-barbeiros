import { Component, ElementRef, NgModule, ViewChild } from '@angular/core';
import {FormControl, FormGroup, FormsModule, NgModelGroup, ReactiveFormsModule} from '@angular/forms';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // objeto formulario
 
  @ViewChild('nome')nome!: ElementRef
  @ViewChild('email')email!: ElementRef
  postData(){
    const nome = this.nome.nativeElement.value
    const email = this.email.nativeElement.value

    const clientes = localStorage.getItem('clientes') || []

      for(let i=1;i<=clientes.length;i++){
        console.log(clientes[i])
      }
      // se nome e email estiver entre os clientes mostre os servicos agendados
      if(Object.values(clientes).includes(nome) || nome ==''){

        //redirecionar para pagina com servicos agendados
        window.alert('cliente ja existe!')
      }
      else if(Object.values(clientes).includes(email) || email == ''){
        window.alert('cliente ja existe!')
      }
      // se nome e email nao estiver registrado mostre os servicos disponiveis e opcao de agendamento
      else{
        /*fetch('https://xqnqcpcqlzpcxyanlahd.supabase.co/rest/v1/cadastros',{
        method:'POST',
        headers:{'apikey':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxbnFjcGNxbHpwY3h5YW5sYWhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1NDU0MzUsImV4cCI6MjA2ODEyMTQzNX0.i2heKXHzxsCs3K0zDMDcu7zv32yAjKAh73dDhGpwtHA",
          "Authorization": `${environment.SUPABASE_CLIENT_ANON_KEY}`,
          "Content-Type":"application/json",
          "Prefer": "resolution=merge-duplicates",
          
          "connection":"keep-alive"
        },
        body: JSON.stringify([{nome: `${nome}`,email: `${email}`}])
        
        }).then(data => {window.alert('agendado com sucesso')}) */
        console.log('foi')
      }
    }
    
     
    
    ngOnInit(): void {
  
        fetch('https://xqnqcpcqlzpcxyanlahd.supabase.co/rest/v1/cadastros',{
          method:'GET',
          headers:{'apikey':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxbnFjcGNxbHpwY3h5YW5sYWhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1NDU0MzUsImV4cCI6MjA2ODEyMTQzNX0.i2heKXHzxsCs3K0zDMDcu7zv32yAjKAh73dDhGpwtHA",
            "Authorization": `${environment.SUPABASE_CLIENT_ANON_KEY}`,
            "Content-Type":"application/json",
            "Prefer": "resolution=merge-duplicates",
            "accept":'*/*',
            "connection":"keep-alive"
          },        
        }).then(data => data.json())
          .then(data => {
  
            // salvar os dados do backend localmente
            localStorage.setItem('clientes', JSON.stringify(data))
        }) 
        
    }
  
  }



