/*

    Copyright (C) 2012-2013 by Clearcode <http://clearcode.cc>
    and associates (see AUTHORS).

    This file is part of cc-gauge-directive.

    cc-gauge-directive is free software: you can redistribute it and/or modify
    it under the terms of the Lesser GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    cc-gauge-directive is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with cc-gauge-directive.  If not, see <http://www.gnu.org/licenses/>.

*/
(function (angular) {

  'use strict';

  angular
    .module('cc.gauge.directive')
    .directive('gauge', [function () {
      return {
        templateUrl: 'partials/directive_gauge.html',
        replace: true,
        restrict: 'E',
        scope: {
          value: '=input',
          label: '@',
          options: '='
        }
      };
    }]);

})(window.angular);
