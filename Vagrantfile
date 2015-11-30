Vagrant.configure(2) do |config|

  # ISO
  config.vm.box = "erackson/EcoRide"

  # Memoria da Maquina Virtual
  config.vm.provider "virtualbox" do |vb|
    # Display the VirtualBox GUI when booting the machine
     vb.gui = false

     # Customize the amount of memory on the VM:
     vb.memory = "512"
  end

  # Verificar atualização da ISO
  config.vm.box_check_update = true

  # Rede
  # config.vm.network "forwarded_port", guest: 3000, host: 8080
  config.vm.network "private_network", ip: "192.168.24.69"

  # Sincronização Extra
  # config.vm.synced_folder "../data", "/vagrant_data" ( Extra Folder Sync )

  # Configurando o Workspace dentro da pasta principal
  config.vm.provision "shell", inline: <<-SHELL
     sudo ln -s /vagrant/   /home/vagrant/Workspace
  SHELL

  ### Fix SSH Authentication Failure
  config.ssh.private_key_path = "./vagrant_private_key"
  config.ssh.forward_agent = true

end
