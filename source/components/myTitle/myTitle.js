const name = 'myTitle';

function Controller() {
    var self = this;
    this.count = 0;
    this.step = 1;
    this.doClick = function() {
        self.count = self.count + parseInt(self.step);
    }
}

app.component(name, {
    templateUrl: 'myTitle.html',
    controller: Controller,
    controllerAs: name
});
