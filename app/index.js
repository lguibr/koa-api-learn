const Koa = require('koa');
const app = new Koa();

// response
const compose = require('koa-compose');

const random = async (ctx, next) => {
  if ('/random' == ctx.path) {
    ctx.body = Math.floor(Math.random() * 10);
  } else {
    await next();
  }
};

const backwards = async (ctx, next) => {
  if ('/backwards' == ctx.path) {
    ctx.body = 'sdrawkcab';
  } else {
    await next();
  }
}

const pi = async (ctx, next) => {
  if ('/pi' == ctx.path) {
    ctx.body = String(Math.PI);
  } else {
    await next();
  }
}

const all = compose([random, backwards, pi]);

app.use(all);
app.listen(3000);