import { Component, OnInit } from "@angular/core";
import { BlockchainService } from "app/services/blockchain.service";
import { UserService } from "./services/user.service";
import { ParticlesConfig } from './particles-config';

declare let particlesJS: any; // Required to be properly interpreted by TypeScript.


//declare var VANTA; 
//declare var particlesJS: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
    public innerWidth: any;
  title = "app";
  public blockchain;
  public userservice;
  
   myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;

  constructor(
    private userService: UserService,
    private blockchainService: BlockchainService
  ) {
    this.blockchain = blockchainService.blockchainInstance;
    this.userservice = userService;
  }
  ngOnInit() {
  
  this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': -1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
 
    this.myParams = {
            
       
       
  particles: {
    number: {
      value: 120,
      density: {
        enable: false,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 399.99999999999994,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 399.99999999999994,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 199.99999999999997,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true

    };
  
  //this.invokeParticles();
  //particlesJS.load("particles-js","particlesjs-config.json",null);
  /*
  this.innerWidth = window.innerWidth;
  VANTA.NET({
  el: "#mainthing",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: window.innerHeight,
  minWidth: window.innerWidth,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xc6fd9,
  points: 12.00
})

*/
  }
  
  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }

  thereArePendingTransactions() {
    return this.blockchain.pendingTransactions.length > 0;
  }

  isUserLoggedIn() {
    console.log(this.userservice.loggedIn);
    return this.userservice.loggedIn;
  }
}
