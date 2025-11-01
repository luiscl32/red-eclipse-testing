# Configuración de GitHub Pages con Dominio Personalizado

## Archivos Creados

1. **public/CNAME** - Contiene el dominio personalizado `redeclipsetesting.com`
2. **.github/workflows/deploy.yml** - Workflow de GitHub Actions para deploy automático

## Pasos para Completar la Configuración

### 1. Habilitar GitHub Pages en el Repositorio

1. Ve a tu repositorio en GitHub
2. Ve a **Settings** > **Pages**
3. En **Source**, selecciona **GitHub Actions**

### 2. Configurar el Dominio Personalizado en GitHub

1. En la misma página de **Settings** > **Pages**
2. En la sección **Custom domain**, ingresa: `redeclipsetesting.com`
3. Haz clic en **Save**
4. GitHub verificará el dominio (puede tardar unos minutos)

### 3. Configurar los DNS del Dominio

Ve al panel de control de tu proveedor de dominio (GoDaddy, Namecheap, Cloudflare, etc.) y configura los siguientes registros DNS:

#### Opción A: Usar registros A (recomendado para apex domain)

Elimina cualquier registro A existente para `@` o `redeclipsetesting.com` y crea estos 4 registros A:

```
Type: A
Host: @
Value: 185.199.108.153

Type: A
Host: @
Value: 185.199.109.153

Type: A
Host: @
Value: 185.199.110.153

Type: A
Host: @
Value: 185.199.111.153
```

#### Configurar www (opcional pero recomendado)

```
Type: CNAME
Host: www
Value: redeclipsetesting.com
```

### 4. Habilitar HTTPS

1. Después de que los DNS se propaguen (puede tardar hasta 24 horas, usualmente menos)
2. Regresa a **Settings** > **Pages** en GitHub
3. Marca la casilla **Enforce HTTPS**

## Verificación

Para verificar que los DNS están configurados correctamente, ejecuta:

```bash
dig redeclipsetesting.com +noall +answer
```

Deberías ver los 4 IPs de GitHub Pages en los resultados.

## Deploy Automático

El workflow de GitHub Actions se ejecutará automáticamente cuando:
- Hagas push a la rama `main`
- Ejecutes manualmente el workflow desde la pestaña **Actions** en GitHub

## Problemas Comunes

### El sitio no carga después del deploy
- Verifica que los DNS estén configurados correctamente
- Espera a que los DNS se propaguen (puede tardar hasta 24 horas)
- Verifica que el workflow de GitHub Actions se haya ejecutado exitosamente

### Error "CNAME already taken"
- Verifica que no haya otro repositorio usando el mismo dominio
- Asegúrate de que el archivo CNAME contenga solo el dominio, sin http:// o www

### El dominio no se verifica en GitHub
- Verifica que los registros A estén configurados correctamente
- Espera a que los DNS se propaguen
- Intenta hacer click en "Retry" en la página de configuración de Pages
