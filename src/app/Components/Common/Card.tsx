"use client";
import React from 'react';
import styled from 'styled-components';

interface CardProps {
  count: string | number;
  title: string;
  description: string;
}

const Card = ({ count, title, description }: CardProps) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-number">{String(count).padStart(2, '0')}</div>
        <div className="card-content">
          <p className="heading">{title}</p>
          <p className="description">
            {description}
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 215px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    overflow: hidden;
    border: 1px solid #f0f0f0;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }

  .card-number {
    font-size: 80px;
    font-weight: 900;
    color: #fff0e6; /* Light peach/orange color from image */
    line-height: 1;
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 0;
    font-family: var(--font-primary); /* Assuming a font var exists, or inherit */
  }

  .card-content {
    position: relative;
    z-index: 1;
    margin-top: 80px; /* Space for the number */
  }

  .heading {
    font-size: 20px;
    color: #0056b3; /* Dark blue specific to the image style */
    font-weight: 700;
    margin-bottom: 15px;
    text-transform: capitalize;
  }

  .description {
    font-size: 15px;
    color: #333;
    line-height: 1.6;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }`;

export default Card;
