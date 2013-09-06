BRANCH=$(shell git branch | grep '^*' | cut -d' ' -f2)
deploy: site.yaml clean
	hyde gen

pub: deploy
	if [ $(BRANCH) = "master" ]; then \
		if ! git status | egrep -q '^nothing to commit.*working directory clean'; then echo Untracked files, not pushing && exit 1; fi; \
		echo "==> RSYNC TO PROD"; \
		rsync -Pavz --delete deploy/ julien.syx.fr:/var/www/julien.syx.fr/; \
	else \
		echo "==> RSYNC TO DEV"; \
		rsync -Pavz --delete deploy/ julien.syx.fr:/var/www/dev.julien.syx.fr/; \
	fi

clean:
	rm -rf deploy

web: deploy
	hyde serve -p 8080
