import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// them FormsModule de su dung 2-ways binding
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StructComponent } from './struct/struct.component';
import { WordsComponent } from './words/words.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CardComponent } from './card/card.component';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';

// de su dung Round Pipe
import { RoundPipe } from '../round.pipe';

// de su dung Service, them trong phan imports[] nua
import { IpComponent } from '../ip.component';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    UserFormComponent,
    StructComponent,
    WordsComponent,
    PersonComponent,
    ListPersonComponent,
    ParentComponent,
    ChildComponent,
    CardComponent,
    LearnPipeComponent,
    IpComponent,
    RoundPipe
  ],
  imports: [
    BrowserModule,
    // them de su dung Service
    HttpModule,
    // them FormsModule de su dung 2-ways binding
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
