import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Todo, TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.page.html',
  styleUrls: ['./todo-details.page.scss'],
})
export class TodoDetailsPage implements OnInit {


  todo: Todo = {
    task: 'test',
    createdAt: new Date().getTime(),
    Subjet : 'corona times',
    priority: 2
  };

  todoId = null;
  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private nav: NavController, private todoService: TodoService, private loadingController: LoadingController) { }
 
  ngOnInit() {

    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId)  {
      this.loadTodo();
    }
  }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading Todo..'
    });
    await loading.present();
 
    this.todoService.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.todo = res;
    });
  }
 
  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Saving Todo..'
    });
    await loading.present();
 
    if (this.todoId) {
      this.todoService.updateTodo(this.todo, this.todoId).then(() => {
        loading.dismiss();
       // this.nav.navigateBack('todo-home');
       this.nav.navigateBack('/todo-home');
       
      });
    } else {
      this.todoService.addTodo(this.todo).then(() => {
        loading.dismiss();
      
        this.nav.navigateBack('/todo-home');
       // this.nav.navigateBack('todo-home');
      });
    }
  }

}
