
using UnityEngine;

public struct Vector2D
{
    public float x;
    public float y;

    public Vector2D normalize
    {
        get
        {
            return new Vector2D(this.x / this.magnitude, this.y / this.magnitude);
        }
    }

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


    public static Vector2D operator +(Vector2D a, Vector2D b)
    {
        return new Vector2D(a.x + b.x, a.y + b.y);
    }

    public static Vector2D operator -(Vector2D a, Vector2D b)
    {
        return new Vector2D(a.x - b.x, a.y - b.y);
    }

    public static Vector2D operator -(Vector2D a)
    {
        return new Vector2D(-a.x, -a.y);
    }

    public static Vector2D operator /(Vector2D a, float d)
    {
        return new Vector2D(a.x / d, a.y / d);
    }

    public static Vector2D operator /(float d, Vector2D a)
    {
        return new Vector2D(a.x / d, a.y / d);
    }

    public static Vector2D operator *(Vector2D a, float d)
    {
        return new Vector2D(a.x * d, a.y * d);
    }

    public static Vector2D operator *(float d, Vector2D a)
    {
        return new Vector2D(a.x * d, a.y * d);
    }

    public static float Distance(Vector2 a, Vector2 b)
    {
        return (a - b).magnitude;
    }

    public void Normalize()
    {
        this.x = this.x / this.magnitude;
        this.y = this.y / this.magnitude;
    }

}//END VECTOR2D CLASS


