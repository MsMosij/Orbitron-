swap');
1    body { margin: 0; overflow: hidden; font-family: 'Orbitron', sans-serif; }
2    canvas { display: block; }
3    #overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; }
4    .interactive-element { pointer-events: auto; }
5    
6    /* Retro-future design elements */
7    .brave-border {
8        border: 2px solid #00ffff; /* Electric Cyan */
9        box-shadow: 0 0 10px #00ffff, inset 0 0 5px #00ffff;
10        background-color: rgba(17, 24, 39, 0.85); /* A slightly darker gray */
11        backdrop-filter: blur(8px);
12    }
13    .brave-text {
14        color: #ff00ff; /* Neon Magenta */
15        text-shadow: 0 0 5px #ff00ff;
16    }
17    .brave-chat-input {
18        border-top: 2px solid #00ff00; /* Neon Green */
19        background-color: rgba(31, 41, 55, 0.7);
20        color: #00ffff;
21        text-shadow: 0 0 2px #00ffff;
22    }
23    .chat-message {
24        margin-bottom: 0.5rem;
25        padding: 0.25rem 0.5rem;
26        border-radius: 0.5rem;
27        font-family: 'Inter', sans-serif;
28        text-shadow: none;
29    }
30    .chat-user {
31        color: #00ffff;
32    }
33    .chat-system {
34        color: #ff00ff;
35    }
36    .grid-button.active, #bridge-btn.active, #mesh-deform-btn.active, #zeropy-btn.active {
37        box-shadow: inset 0 0 15px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.4);
38        transform: scale(1.05);
39    }
40</style
