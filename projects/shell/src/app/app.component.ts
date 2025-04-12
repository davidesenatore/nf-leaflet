import { loadRemoteModule } from '@angular-architects/native-federation';
import { Component, EnvironmentInjector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  title = 'shell';
  @ViewChild('vc', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private injector: EnvironmentInjector) {        
  }
    
  async ngOnInit() {

    const component = await loadRemoteModule("mfe1", "./Component").then(c => c.AppComponent);
    
    this.container.createComponent<any>(component, { environmentInjector: this.injector });
  }

}
