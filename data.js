var APP_DATA = {
  "scenes": [
    {
      "id": "0-com1-building_edited",
      "name": "COM1 Building_edited",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.4406496793888479,
        "pitch": -0.2803464714924857,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": 0.15183852613833793,
          "pitch": 0.08448820837198312,
          "rotation": 6.283185307179586,
          "target": "1-lobby_edited"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2384013395628095,
          "pitch": -0.028454478693433316,
          "title": "COM1 Building",
          "text": "Welcome to NUS School of Computing. This is the main building of SOC."
        }
      ]
    },
    {
      "id": "1-lobby_edited",
      "name": "Lobby_edited",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.4457707243730162,
        "pitch": -0.06266131136167985,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": 2.2514342876944387,
          "pitch": 0.0540892025702675,
          "rotation": 0,
          "target": "2-foyer-at-level-2_edited"
        },
        {
          "yaw": 1.4184536737824427,
          "pitch": 0.4698912580231518,
          "rotation": 5.497787143782138,
          "target": "0-com1-building_edited"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.9966706735852213,
          "pitch": 0.09947535140490515,
          "title": "COM1 Lobby",
          "text": "Welcome to the lobby of NUS COM1 Building."
        },
        {
          "yaw": -0.8630316438274583,
          "pitch": -0.41510285846074524,
          "title": "Billboard",
          "text": "This colourful billboard here introduces the history of NUS computing."
        }
      ]
    },
    {
      "id": "2-foyer-at-level-2_edited",
      "name": "Foyer at Level 2_edited",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.24815913456056116,
        "pitch": 0.09812980548188399,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": -2.916940390784701,
          "pitch": 0.1730029608900736,
          "rotation": 11.780972450961727,
          "target": "1-lobby_edited"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.006793730901836881,
          "pitch": 0.21284215871472867,
          "title": "Level 2 Foyer",
          "text": "Welcome to the Level 2 Foyer of NUS COM1. Students may study, discuss or rest here at the tables provided."
        }
      ]
    }
  ],
  "name": "School of Computing",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
