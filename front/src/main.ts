console.log('Hello Typescript World!');

let app = new PIXI.Application({ });

document.body.appendChild(app.view);

app.renderer.view.style.position = 'absolute';
app.renderer.view.style.display = 'block';
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);
