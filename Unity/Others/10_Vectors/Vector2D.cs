﻿using UnityEngine;

public struct Vector2D
{
    public float x;
    public float y;
    public float angle
    {
        get
        {
            return Mathf.Atan2(this.y, this.x);
        }
    }

    public float angleDegrees
    {
        get
        {
            return (Mathf.Atan2(this.y, this.x) * Mathf.Rad2Deg + 360) % 360;
        }
    }

    public float magnitude
    {
        get
        {
            return Mathf.Sqrt((this.x * this.x) + (this.y * this.y));
        }
    }

    public float sqrMagnitude
    {
        get
        {
            return (this.x * this.x) + (this.y * this.y);
        }
    }

    public Vector2D Add(Vector2D other)
    {
        return new Vector2D(this.x + other.x, this.y + other.y);
    }

    public void Set(float x, float y)
    {
        this.x = x;
        this.y = y;
    }


    public Vector2D(float x, float y)
    {
        this.x = x;
        this.y = y;
    }

    public Vector2D(Vector2D other)
    {
        this.x = other.x;
        this.y = other.y;
    }


}//END VECTOR2D CLASS


