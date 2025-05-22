"use client";

import { useRef, useLayoutEffect } from 'react';

interface Ball {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  color: string;
  opacity: number;
  pulseDirection: boolean;
  pulseSpeed: number;
}

export default function BouncingBalls() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full width of its container
    const updateCanvasSize = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.offsetWidth;
        canvas.height = 70; // A bit taller to give more space for balls
      }
    };
    
    // Update size initially and on window resize
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    // Ball colors - cheerful, child-friendly colors
    const ballColors = [
      '#FF4500', // Orange Red
      '#1E90FF', // Dodger Blue
      '#32CD32', // Lime Green
      '#FFD700', // Gold
      '#FF1493', // Deep Pink
      '#00CED1', // Dark Turquoise
      '#800080', // Purple
      '#FF8C00'  // Dark Orange
    ];
    
    // Create 8 balls with random properties
    const balls: Ball[] = Array.from({ length: 8 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * 3, // Slightly faster motion
      dy: (Math.random() - 0.5) * 3,
      radius: 5 + Math.random() * 10, // Random size between 5-15px
      color: ballColors[Math.floor(Math.random() * ballColors.length)],
      opacity: 0.8 + Math.random() * 0.2, // Higher opacity for solid look
      pulseDirection: Math.random() > 0.5, // Whether growing or shrinking
      pulseSpeed: 0.01 + Math.random() * 0.03 // How fast it pulses
    }));
    
    // Animation loop
    const animate = () => {
      // Ensure canvas dimensions are up-to-date before drawing
      updateCanvasSize();
      if (!canvas || !ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw each ball
      balls.forEach(ball => {
        // Update position
        ball.x += ball.dx;
        ball.y += ball.dy;
        
        // Bounce off walls with slight acceleration
        if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
          ball.dx = -ball.dx * 1.01; // Add a slight acceleration
          if (Math.abs(ball.dx) > 4) ball.dx *= 0.9; // Limit maximum speed
        }
        
        if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
          ball.dy = -ball.dy * 1.01;
          if (Math.abs(ball.dy) > 4) ball.dy *= 0.9; // Limit maximum speed
        }
        
        // Pulsing effect (grow and shrink)
        if (ball.pulseDirection) {
          ball.radius += ball.pulseSpeed;
          if (ball.radius > 15) {
            ball.pulseDirection = false;
          }
        } else {
          ball.radius -= ball.pulseSpeed;
          if (ball.radius < 5) {
            ball.pulseDirection = true;
          }
        }
        
        // Draw solid ping-pong style ball
        ctx.save();
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = ball.color;
        ctx.globalAlpha = ball.opacity;
        ctx.fill();
        // Subtle shadow for depth
        ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();

        // Add highlight for a ping-pong ball effect
        ctx.beginPath();
        const highlightRadius = ball.radius * 0.4;
        ctx.arc(ball.x - ball.radius * 0.3, ball.y - ball.radius * 0.3, highlightRadius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fill();
        ctx.closePath();
      });
      
      requestAnimationFrame(animate);
    };
    
    // Start animation
    const animationId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        style={{ opacity: 0.8 }}
      />
    </div>
  );
} 