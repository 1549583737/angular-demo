import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './modules/app-routing.module';
import { DemoComponentComponent } from './demo/demo-component/demo-component.component';
import { CardComponent } from './components/card/card.component';
import { DemoStyleComponent } from './demo/demo-style/demo-style.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { DemoBindComponent } from './demo/demo-bind/demo-bind.component';
import { DemoInputComponent } from './demo/demo-input/demo-input.component';
import { CardFooterComponent } from './components/card-footer/card-footer.component';
import { ButtonDirective } from './directive/button/button.directive';
import { DemoDirectiveComponent } from './demo/demo-directive/demo-directive.component';
import { MyIfDirective } from './directive/my-if/my-if.directive';
import { DemoPipeComponent } from './demo/demo-pipe/demo-pipe.component';
import { SortPipe } from './pipes/sort.pipe';
import { DemoServiceComponent } from './demo/demo-service/demo-service.component';
import { DemoFormComponent } from './demo/demo-form/demo-form.component';
import { DemoRouterComponent } from './demo/demo-router/demo-router.component';
import { DemoAnimationComponent } from './demo/demo-animation/demo-animation.component';
import { DemoRouter2Component } from './demo/demo-router2/demo-router2.component';
import { DemoChildRouterComponent } from './demo/demo-child-router/demo-child-router.component';
import { DemoChildRouter2Component } from './demo/demo-child-router2/demo-child-router2.component';
import { DemoGuardComponent } from './demo/demo-guard/demo-guard.component';
import { DemoImageComponent } from './demo/demo-image/demo-image.component';
import { DemoGuardChildComponent } from './demo/demo-guard-child/demo-guard-child.component';
import { DemoTrendComponent } from './demo/demo-trend/demo-trend.component';
import { TrendTemplateComponent } from './components/trend-template/trend-template.component';
import { TrendComponentComponent } from './components/trend-component/trend-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponentComponent,
    CardComponent,
    DemoStyleComponent,
    CardHeaderComponent,
    DemoBindComponent,
    DemoInputComponent,
    CardFooterComponent,
    ButtonDirective,
    DemoDirectiveComponent,
    MyIfDirective,
    DemoPipeComponent,
    SortPipe,
    DemoServiceComponent,
    DemoFormComponent,
    DemoRouterComponent,
    DemoAnimationComponent,
    DemoRouter2Component,
    DemoChildRouterComponent,
    DemoChildRouter2Component,
    DemoGuardComponent,
    DemoImageComponent,
    DemoGuardChildComponent,
    DemoTrendComponent,
    TrendTemplateComponent,
    TrendComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  entryComponents: [TrendComponentComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
