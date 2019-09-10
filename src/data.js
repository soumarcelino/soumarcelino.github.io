import React from 'react';

import SecrelNet from './components/Contents/Secrelnet';
import FortalNet from './components/Contents/Fortalnet';


export const data = [
    {
      title: 'Experiências',
      itens: [
        {
          name: 'Desenvolvedor de sistemas III',
          date: 'Setembro de 2018 - Agora',
          logo: 'https://cdn.foodlogistics.com/files/base/acbm/fl/image/2014/02/960w/logo-com-slogan-fw-3_11307526.jpg'
        },
        {
          name: 'Líder Técnico',
          date: 'Dezembro de 2015 - Setembro de 2018',
          duration: '2 anos e 10 meses',
          logo: 'https://secrel.com.br/wp-content/uploads/2018/01/cropped-LOGO_secrelnet-3.png',
          content: <SecrelNet/>
        },
        {
          name: 'Estagiário em desenvolvimento',
          date: 'Junho de 2015 - Dezembro de 2015',
          duration: '7 meses',
          logo: 'http://dgsites.com.br/wp-content/uploads/2019/02/logo1.png',
          content: <FortalNet/>

        },
        {
          name: 'CNPQ',
          date: 'Janeiro de 2014 - Março de 2015',
          duration: '1 ano e 3 meses',
          logo: 'http://ppgtg.ufsc.br/files/2017/06/CNPq.jpg'
        }
      ]
    },
    {
        title: 'Formação',
        itens: [
          {
            name: 'Análise e Desenvolvimento de Sistemas',
            date: '2018 - 2019',
            logo: 'https://logodownload.org/wp-content/uploads/2014/12/estacio-logo-faculdade-4.jpg'
          },
          {
            name: 'Programador de Dispositivos Móveis',
            date: '2018 - 2018',
            logo: 'https://4.bp.blogspot.com/-xRwcibY5wmw/V5pP6onzkrI/AAAAAAABEcs/cyDxmREQXmIMOvy_02LCl7NiBhB0CLaVwCLcB/s1600/senai-ce-cursos-gratuitos-inscricao.jpg'
          },
          {
            name: 'Ciência da Computação',
            date: '2017 - 2018',
            logo: 'https://portal.fbuni.edu.br/images/logo-login.png',
          },
          {
            name: 'Java com banco de dados',
            date: '2014 - 2014',
            logo: 'https://www.funcap.ce.gov.br/wp-content/uploads/sites/52/2014/08/universidade_trabalho_digital.png'
          },
          {
            name: 'Técnico Integrado em Informática',
            date: '2013 - 2015',
            duration: '1 ano e 3 meses',
            logo: 'http://indiceconsultores.com.br/wp-content/uploads/2017/02/logo_04.jpg'
          }
        ]
      }
  ];