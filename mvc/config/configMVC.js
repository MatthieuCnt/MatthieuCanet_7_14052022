import { HeadingModel } from '../model/model';
import { HeadingController } from '../controllers/controllers';
import { HeadingView } from '../view/view';

function mvc() {
	var model = new HeadingModel(model);
	var controller = new HeadingController(controller);
	var view = new HeadingView(view);
}

mvc();
