import _ from 'lodash';
import $ from 'jquery';

const dom = $('<div>');
dom.html(_.join(['1', '2'], '###'));
$('body').append(dom)

