// Tree Shaking 只支持es module; 底层静态引入，而不支持commonjs，因为commonjs是动态引入模式

import { add } from './math.js';

add(1,2);