namespace wp.angularBase {
    // Base Angular controller
    export class BaseCtrl {

        $mdToast: any;

        constructor($scope: ng.IScope, $mdToast: any) {
            this.$mdToast = $mdToast;
            $(window).resize(() => {
            });
        }

        toastPosition = angular.extend({}, {
            bottom: false,
            top: true,
            left: false,
            right: true
        });

        getToastPosition = () => {
            var self = this;
            return Object.keys(this.toastPosition)
                .filter(function (pos) {
                    return self.toastPosition[pos];
                }).join(' ');
        };

        showMessage = (message: string) => {
            var pinTo = this.getToastPosition();
            this.$mdToast.show(
                this.$mdToast.simple()
                    .textContent(message)
                    .position(pinTo)
                    .toastClass("toasterMessage")
                    .hideDelay(4000))
                .then(function () {
                    //$log.log('Toast dismissed.');
                }).catch(function () {
                    //$log.log('Toast failed or was forced to close early by another toast.');
                });
        }

        showError = (message: string) => {
            var pinTo = this.getToastPosition();
            this.$mdToast.show(
                this.$mdToast.simple()
                    .textContent(message)
                    .toastClass("toasterError")
                    .position(pinTo)
                    .hideDelay(4000))
                .then(function () {
                    //$log.log('Toast dismissed.');
                }).catch(function () {
                    //$log.log('Toast failed or was forced to close early by another toast.');
                });
        }

        showWarning = (message: string) => {
            var pinTo = this.getToastPosition();
            this.$mdToast.show(
                this.$mdToast.simple()
                    .textContent(message)
                    .toastClass("toasterWarning")
                    .position(pinTo)
                    .hideDelay(4000))
                .then(function () {
                    //$log.log('Toast dismissed.');
                }).catch(function () {
                    //$log.log('Toast failed or was forced to close early by another toast.');
                });
        }

    }

}
