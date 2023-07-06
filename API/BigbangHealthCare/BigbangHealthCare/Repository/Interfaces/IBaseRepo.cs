namespace JWTAuthenticationApp.Interfaces
{
    public interface IBaseRepo<K, T>
    {
        T Add(T item);
        T Delete(string id);
        T Get(K key);
    }
}