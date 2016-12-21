angular.module('app').controller('AppController', AppController);

function AppController($document, $state, config) {
    this.projectName = config.projectName;
    this.$document = $document;
    this.$state = $state;
    this.themeLink = this.$document[0].getElementById('theme-link');
}

AppController.prototype.goToComponentsView = function($event) {
    $event.preventDefault();

    this.$state.go('app.component.appBar');
};

AppController.prototype.toggleTheme = function() {
    if (this.usingDefaultTheme()) {
        this.themeLink.href = this.themeLink.href.replace('mfux', 'mfux_dark');
    }
    else {
        this.themeLink.href = this.themeLink.href.replace('_dark', '');
    }
};

AppController.prototype.usingDefaultTheme = function() {
    return this.themeLink.href.indexOf('_dark') < 0;
};
