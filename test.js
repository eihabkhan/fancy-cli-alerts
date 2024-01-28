import alert from './index.js';

alert({});

alert({
  type: 'success',
  message: 'All done!',
});

alert({
  type: 'info',
  message: 'Support the author',
});

alert({
  type: 'warning',
  message: '1 dependency will be depricated soon',
});

alert({
  type: 'error',
  message: '1 depricated dependency',
});
