web������ƽ̨��https://github.com/peiweiing

Git��������


1.����github

 ssh-keygen -t rsa -C "ע���github������"
	һ·�س��ͺ�
 
 ���û���Ŀ¼��C:\Users\�û���\.ssh
	������������ļ���id_rsa  id_rsa.pub

 ��github -> settings -> SSH and GPG keys -> New SSH key -> title������д ��key������id_rsa.pub
 ������
2. ��һ���ύ����
 �ҵ���Ҫ�ϴ��ļ���Ŀ¼��ִ��
 git init
 ��������������������
 git config --global user.email "you@example.com"
 git config --global user.name "Your Name"
 
 Ȼ��ִ�����������
 git add *  ����ǰĿ¼�������ļ�ȫ����ӵ���ʱ��
 git commit -m "�ύ����"    ��������ӵ����زֿ�
 git remote add origin https://github.com/peiweiing/gittest.git  �������õĲֿ�
 git push -u origin master �����������ύ��Զ�ֿ̲�

 
 3. �ڶ����ύ����
 git add * 
 git commit -m "�ύ���ݵı�ע"
 git push origin master 

 

 4. ��������ɾ��
 ��������ɾ��������Զ�ֿ̲��ļ����ڣ������Ҫ�ѱ��ص��޸��ύ��Զ�ֿ̲⣬��Ҫ��������Ĳ���
 git rm ɾ�����ļ�
 git commit -m "�ύ���ݵı�ע"
 git push origin master 
 
 ���ɾ�����ݺ��������ˣ�����ֱ�ӻָ�����
 git checkout -- ɾ�����ļ�    �������ܹ�ֱ�ӻָ�����
 
 5. �������λ�ã���Ҫ��Զ�ֿ̲���ļ�����������
 ���Խ������²�����
 
 git init 
 git remote add origin https://github.com/peiweiing/xxxxx.git
 git pull origin master
 
 

tip���鿴����״̬��git remote -v

.������
   git remote add origin 'https://github.com/peiweiing/TeamWork.git'
 	

.��������
   echo "222" > xxxx.txt
   git status
   git add .
   git commit -m'xxxxaaa'
   git push origin master