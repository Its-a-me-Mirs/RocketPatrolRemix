class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        this.load.audio('sfx_select', './assets/assets_blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/assets_explosion38.wav');
        this.load.audio('sfx_rocket', './assets/assets_rocket_shot.wav');
    }
    create() {
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '24px',
            backgroundColor: '#F3B141',
            color: 'black',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
                left: 10,
                right: 10
            },
            fixedWidth: 0
        }

        let titleConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: 'black',
            color: 'white',
            align: 'center',
            padding: {
                top: 5,
                bottom: 10,
                left: 10,
                right: 10
            },
            fixedWidth: 0
        }
        
        // show menu text
        this.add.text(
            game.config.width/2,
            game.config.height/2 - borderUISize - borderPadding,
            'ROCKET PATROL REMIX',
            titleConfig
            ).setOrigin(0.5);
        
        this.add.text(
            game.config.width/2,
            game.config.height/2,
            'Use LEFT and RIGHT to move & (F) to Fire',
            menuConfig
            ).setOrigin(0.5);
        
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        
        this.add.text(
            game.config.width/2,
            game.config.height/2 + borderUISize*2 + borderPadding,
            'Press LEFT for Novice\n&\nRIGHT for Expert',
            menuConfig
            ).setOrigin(0.5);
        
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    // game difficulty settings
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // easy mode settings
            game.settings = {
                spaceshipSpeed: 2,
                gameTimer: 60000    
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode settings
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000    
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');    
        }
    }
}