import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const Background = () => {
  const sketchRef = useRef();

  useEffect(() => {
    let canvas;

    const sketch = (p) => {
      const dim = 900;
      const num = 128;
      let time = 0;
      let friends = [];
      const maxpal = 512;
      let numpal = 0;
      let goodcolor = [];

      class Friend {
        constructor(X, Y, Id) {
          this.x = this.dx = X;
          this.y = this.dy = Y;
          this.id = Id;
          this.vx = this.vy = 0;
          this.numcon = 0;
          this.maxcon = 10;
          this.lencon = 10 + p.int(p.random(50));
          this.connections = new Array(this.maxcon);
          this.numsands = 3;
          this.sands = Array(this.numsands).fill().map(() => new SandPainter());
          this.myc = somecolor();
        }

        expose() {
          for (let dx = -2; dx < 3; dx++) {
            let a = 0.5 - Math.abs(dx) / 5.0;
            p.stroke(0, 256 * a);
            p.point(this.x + dx, this.y);
            p.stroke(255, 256 * a);
            p.point(this.x + dx - 1, this.y - 1);
          }
          for (let dy = -2; dy < 3; dy++) {
            let a = 0.5 - Math.abs(dy) / 5.0;
            p.stroke(0, 256 * a);
            p.point(this.x, this.y + dy);
            p.stroke(255, 256 * a);
            p.point(this.x - 1, this.y + dy - 1);
          }
        }

        exposeConnections() {
          for (let n = 0; n < this.numcon; n++) {
            let ox = friends[this.connections[n]].x;
            let oy = friends[this.connections[n]].y;
            for (let s = 0; s < this.numsands; s++) {
              this.sands[s].render(this.x, this.y, ox, oy);
            }
          }
        }

        move() {
          this.x += this.vx;
          this.y += this.vy;
          this.vx *= 0.92;
          this.vy *= 0.92;
        }

        connectTo(f) {
          if (this.numcon < this.maxcon && !this.friendOf(f)) {
            this.connections[this.numcon] = f;
            this.numcon++;
          }
        }

        friendOf(x) {
          return this.connections.slice(0, this.numcon).includes(x);
        }

        findHappyPlace() {
          let ax = 0.0, ay = 0.0;
          for (let n = 0; n < num; n++) {
            if (friends[n] !== this) {
              let ddx = friends[n].x - this.x;
              let ddy = friends[n].y - this.y;
              let d = p.sqrt(ddx * ddx + ddy * ddy);
              let t = p.atan2(ddy, ddx);
              let friend = this.friendOf(n);
              if (friend && d > this.lencon) {
                ax += 4.0 * p.cos(t);
                ay += 4.0 * p.sin(t);
              } else if (!friend && d < this.lencon) {
                ax += (this.lencon - d) * p.cos(t + p.PI);
                ay += (this.lencon - d) * p.sin(t + p.PI);
              }
            }
          }
          this.vx += ax / 42.22;
          this.vy += ay / 42.22;
        }
      }

      class SandPainter {
        constructor() {
          this.p = p.random(1.0);
          this.c = somecolor();
          this.g = p.random(0.01, 0.1);
        }

        render(x, y, ox, oy) {
          p.stroke(p.red(this.c), p.green(this.c), p.blue(this.c), 28);
          p.point(ox + (x - ox) * p.sin(this.p), oy + (y - oy) * p.sin(this.p));

          this.g += p.random(-0.050, 0.050);
          const maxg = 0.22;
          this.g = p.constrain(this.g, -maxg, maxg);

          const w = this.g / 10.0;
          for (let i = 0; i < 11; i++) {
            const a = 0.1 - i / 110;
            p.stroke(p.red(this.c), p.green(this.c), p.blue(this.c), 256 * a);
            p.point(ox + (x - ox) * p.sin(this.p + p.sin(i * w)), oy + (y - oy) * p.sin(this.p + p.sin(i * w)));
            p.point(ox + (x - ox) * p.sin(this.p - p.sin(i * w)), oy + (y - oy) * p.sin(this.p - p.sin(i * w)));
          }
        }
      }

      function somecolor() {
        return goodcolor[p.int(p.random(numpal))];
      }

      function takecolor(fn) {
        // This function needs to be adapted for web use
        // For now, we'll use a simple color palette
        goodcolor = [
          p.color(255, 0, 0),
          p.color(0, 255, 0),
          p.color(0, 0, 255),
          p.color(255, 255, 0),
          p.color(0, 255, 255),
          p.color(255, 0, 255),
        ];
        numpal = goodcolor.length;
      }

      function resetAll() {
        friends = Array(num).fill().map((_, x) => {
          const fx = dim / 2 + 0.4 * dim * p.cos(p.TWO_PI * x / num);
          const fy = dim / 2 + 0.4 * dim * p.sin(p.TWO_PI * x / num);
          return new Friend(fx, fy, x);
        });

        for (let k = 0; k < num * 2.2; k++) {
          const a = p.floor(p.random(num));
          const b = p.floor(a + p.random(22)) % num;
          if (a !== b) {
            friends[a].connectTo(b);
            friends[b].connectTo(a);
          }
        }
      }

      p.setup = () => {
        canvas = p.createCanvas(dim, dim);
        canvas.parent(sketchRef.current);
        takecolor("longStickhorse.gif"); // This needs to be adapted
        p.background(255);
        p.frameRate(30);
        resetAll();
      };

      p.draw = () => {
        friends.forEach(friend => friend.move());
        friends.forEach(friend => {
          friend.expose();
          friend.exposeConnections();
        });
        if (time % 2 === 0) friends.forEach(friend => friend.findHappyPlace());
        time++;
      };

      p.mousePressed = () => {
        resetAll();
        p.background(255);
      };
    };

    new p5(sketch);

    return () => {
      canvas.remove();
    };
  }, []);

  return <div ref={sketchRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default Background;