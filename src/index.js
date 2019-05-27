import _ from 'lodash';
import $ from 'jquery';
import {ui} from './jquery.ui';

const dom = $('<div>');
dom.html(_.join(['1', '2'], '###'));
ui();
$('body').append(dom)

